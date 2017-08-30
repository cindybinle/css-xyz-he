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

var lyrics = [
  {
    "name": "Tôi Vẫn Cô Đơn  Hồ Việt Trung",
    "length": "5:02",
    "file": "30"
  },
  {
    "name": "Nhật Ký Đời Tôi  Hồ Việt Trung",
    "length": "5:01",
    "file": "29"
  },
  {
    "name": "Có Buồn Nào Buồn Hơn | Hồ Việt Trung ft Âu Nam Thái",
    "length": "6:08",
    "file": "24"
  },
  {
    "name": "Lá Thư Đô Thị  Hồ Việt Trung ft Khưu Huy Vũ",
    "length": "6:02",
    "file": "27"
  },
  {
    "name": "Hãy Quên Anh | Hồ Việt Trung",
    "length": "5:02",
    "file": "25"
  },
  {
    "name": "Đắp Mộ Cuộc Tình - Lê Sang",
    "length": "5:21",
    "file": "28"
  },
  {
    "name": "Tình Đẹp Mùa Chôm Chôm - Hồ Việt Trung",
    "length": "5:26",
    "file": "22"
  },
  {
    "name": "Tình xuân - Mạnh Đình",
    "length": "5:25",
    "file": "23"
  },
 {
    "name": "Ngại Ngùng - Hoài Lâm",
    "length": "4:44",
    "file": "4"
  }, {
    "name": "Sao Chưa Thấy Hồi Âm - Hoài Lâm",
    "length": "5:41",
    "file": "5"
  }, {
    "name": "Nối Lại Tình Xưa - Hoài Lâm",
    "length": "4:15",
    "file": "7"
  },
  {
    "name": "Gặp nhau làm ngơ - Hoài Lâm",
    "length": "4:15",
    "file": "16"
  },
  {
    "name": "12 Gio - Ha Anh Tuan [MP3 320kbps]",
    "length": "3:41",
    "file": "21"
  },
  {
    "name": "Hoa Nang - Hoang Hai [MP3 320kbps]",
    "length": "4:15",
    "file": "17"
  },
  {
    "name": "Anh Nho Em - Tuan Hung [MP3 320kbps]",
    "length": "4:15",
    "file": "18"
  },
  {
    "name": "Noi Tinh Yeu Bat Dau - Bang Kieu_ Lam An [MP3 320kbps]",
    "length": "4:15",
    "file": "19"
  },
  {
    "name": "Anh Khac Hay Em Khac - Khac Viet [MP3 320kbps",
    "length": "4:15",
    "file": "20"
  }
];

lyrics.map(function (obj, index) {
  obj.track = index + 1;
});

console.log(lyrics);

jQuery(function ($) {
  var supportsAudio = !!document.createElement('audio').canPlayType;
  if (supportsAudio) {
    var index = 0,
      playing = false,
      mediaPath = 'https://thuanitdn.github.io/music/',
      extension = '',
      tracks = lyrics,
      buildPlaylist = $.each(tracks, function (key, value) {
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