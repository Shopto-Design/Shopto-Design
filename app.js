
$(document).ready(function() {
  $('#mySelectBox').on('change', function() {
    var optionText = $("#mySelectBox option:selected").text();
    console.log(optionText);
  });
});

var three = '';
$(document).ready(function() {
  $("#generate").click(function() {
    three =
    '<style>.microsite{margin:10vw auto 0vw auto;width:98%}@media only screen and (max-width:600px){.microsite{width:98%}}.microsite_top{height:120px;width:100%;margin:0 auto;background-image:url(https://www.shopto.net/userdata/images/[HEADERURL].jpg);background-size:auto 100%;background-repeat:no-repeat;background-position:center}.img{position:relative;max-width:100%;height:auto}.microsite_middle{padding:60px 10px;text-align:center;background-color:rgba(255,255,255,.9);margin-top:-15%}.microsite_middle h1{font-family:Helvetica;font-size:26px;text-transform:uppercase}.microsite_middle h2{font-family:Helvetica;font-size:26px;font-weight:400;line-height:1.4;color:#4C4C4C;text-transform:uppercase;max-width:1000px;margin:20px auto}.microsite_middle p{text-align:left;padding:10px;font-family:Helvetica;max-width:1500px;margin:20px auto;line-height:2;font-size:14px;color:#4c4c4c;column-count:2;column-gap:40px}.microsite_screens img{width:30%;margin:5px;border-radius:10px}@media only screen and (max-width:1000px){.microsite_screens img{width:90%}.microsite_middle p{text-align:center;column-count:1}}.microsite hr{border-color:rgba(0,0,0,.1)}</style><div class="microsite"><div class="microsite_middle"><div class="microsite_top"></div><h2>[SUBHEAD]</h2><hr><p>[CONTENT]</p><hr><div class="microsite_screens"><div id="microsite_screen"><img src="https://www.shopto.net/userdata/images/[URL1].jpg"><img src="https://www.shopto.net/userdata/images/[URL2].jpg"><img src="https://www.shopto.net/userdata/images/[URL3].jpg"></div></div></div><div class="microsite_bottom"></div></div>';
      var headlineval = $('#headline').val();
      var subheadlineval = $('#subheadline').val();
      var descriptiontext = $('#description').val();
      var headerimage = $('#HeaderImageURL').val();
      var img1 = $('#Image1URL').val();
      var img2 = $('#Image2URL').val();
      var img3 = $('#Image3URL').val();
      functionThree();

      function functionThree() {
        descriptiontext = descriptiontext.replace(/\n/g, '<br>')
        $('#mainoutput').val(three.replace("[HEAD]", headlineval).replace("[SUBHEAD]", subheadlineval).replace("[CONTENT]", descriptiontext).replace("[HEADERURL]", headerimage).replace("[URL1]", img1).replace("[URL2]", img2).replace(
          "[URL3]", img3));
          var copyText = document.getElementById("mainoutput");
          copyText.select();
          document.execCommand("copy");
          $('.alert').fadeToggle(200).delay(2000).fadeToggle(200);
        };
      });
      $('#refresh').click(function() {
        location.reload();
      });
    });
