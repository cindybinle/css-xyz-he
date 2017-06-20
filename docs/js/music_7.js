// html5media enables <video> and <audio> tags in all major browsers
// External File: http://api.html5media.info/1.1.8/html5media.min.js


// Add user agent as an attribute on the <html> tag...
// Inspiration: http://css-tricks.com/ie-10-specific-styles/
var b = document.documentElement;
b.setAttribute('data-useragent', navigator.userAgent);
b.setAttribute('data-platform', navigator.platform);


// HTML5 audio player + playlist controls...
// Inspiration: http://jonhall.info/how_to/create_a_playlist_for_html5_audio
// Mythium Archive: https://archive.org/details/mythium/
jQuery(function ($) {
  var supportsAudio = !!document.createElement('audio').canPlayType;
  if (supportsAudio) {
    var index = 0,
      playing = false,
      mediaPath = 'https://thuanitdn.github.io/music/',
      extension = '',
      tracks = [
        {
          "track": 0,
          "name": "Đắp Mộ Cuộc Tình - Lê Sang",
          "length": "5:21",
          "file": "15"
        },
        {
          "track": 1,
          "name": "Trước Ngày Hội Bắn - Anh Thơ, Việt Hoàn",
          "length": "5:58",
          "file": "14"
        },{
        "track": 2,
        "name": "Xin Gọi Nhau Là Cố Nhân - Bằng Kiều, Quang Lê, Đan Nguyên",
        "length": "5:07",
        "file": "2"
      },{
          "track": 3,
          "name": "Phượng Hồng - Bằng Kiều",
          "length": "6:05",
          "file": "3"
        },{
        "track": 4,
        "name": "Ngại Ngùng - Hoài Lâm",
        "length": "4:44",
        "file": "4"
        },{
        "track": 5,
        "name": "Sao Chưa Thấy Hồi Âm - Hoài Lâm",
        "length": "5:41",
        "file": "5"
      },{
          "track": 6,
          "name": "Về Bên Cha - Hoài Lâm",
          "length": "5:26",
          "file": "6"
        },{
        "track": 7,
        "name": "Nối Lại Tình Xưa - Hoài Lâm",
        "length": "4:15",
        "file": "7"
      },{
        "track": 8,
        "name": "Phút đầu tiên - Nguyên Lê, Quỳnh Dung",
        "length": "4:42",
        "file": "8"
      },{
        "track": 9,
        "name": "Sông Quê - Khánh Bình",
        "length": "6:13",
        "file": "9"
      },{
        "track": 10,
        "name": "Sen Hồng Hư Không - Nam Du",
        "length": "4:34",
        "file": "10"
      },{
        "track": 11,
        "name": "Thuyền Hoa - Hoài Lâm",
        "length": "4:40",
        "file": "11"
      },{
        "track": 12,
        "name": "Phải Lòng Con Gái Bến Tre - Tố My",
        "length": "5:56",
        "file": "12"
      },{
          "track": 13,
          "name": "Thói Đời - Hoài Lâm",
          "length": "4:27",
          "file": "13"
        }, {
          "track": 14,
          "name": "Chuyện Giàn Thiên Lý  Chuyện Hoa Sim",
          "length": "8:54",
          "file": "1"
        }
      ],
      buildPlaylist = $.each(tracks, function(key, value) {
        var trackNumber = value.track,
          trackName = value.name,
          trackLength = value.length;
        if (trackNumber.toString().length === 1) {
          trackNumber = '0' + trackNumber;
        } else {
          trackNumber = '' + trackNumber;
        }
        $('#plList').append('<li><div class="plItem"><div class="plNum">' + trackNumber + '.</div><div class="plTitle">' + trackName + '</div><div class="plLength">' + trackLength + '</div></div></li>');
      }),
      trackCount = tracks.length,
      npAction = $('#npAction'),
      npTitle = $('#npTitle'),
      audio = $('#audio1').bind('play', function () {
        playing = true;
        npAction.text('Now Playing...');
      }).bind('pause', function () {
        playing = false;
        npAction.text('Paused...');
      }).bind('ended', function () {
        npAction.text('Paused...');
        if ((index + 1) < trackCount) {
          index++;
          loadTrack(index);
          audio.play();
        } else {
          audio.pause();
          index = 0;
          loadTrack(index);
        }
      }).get(0),
      btnPrev = $('#btnPrev').click(function () {
        if ((index - 1) > -1) {
          index--;
          loadTrack(index);
          if (playing) {
            audio.play();
          }
        } else {
          audio.pause();
          index = 0;
          loadTrack(index);
        }
      }),
      btnNext = $('#btnNext').click(function () {
        if ((index + 1) < trackCount) {
          index++;
          loadTrack(index);
          if (playing) {
            audio.play();
          }
        } else {
          audio.pause();
          index = 0;
          loadTrack(index);
        }
      }),
      li = $('#plList li').click(function () {
        var id = parseInt($(this).index());
        if (id !== index) {
          playTrack(id);
        }
      }),
      loadTrack = function (id) {
        $('.plSel').removeClass('plSel');
        $('#plList li:eq(' + id + ')').addClass('plSel');
        npTitle.text(tracks[id].name);
        index = id;
        audio.src = mediaPath + tracks[id].file + extension;
      },
      playTrack = function (id) {
        loadTrack(id);
        audio.play();
      };
    extension = audio.canPlayType('audio/mpeg') ? '.mp3' : audio.canPlayType('audio/ogg') ? '.ogg' : '';
    loadTrack(index);
  }
});