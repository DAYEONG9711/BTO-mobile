/* gnb 메뉴 */
var btn = $('.gnb_tab a');

btn.click(function(event){
    event.preventDefault(); //클릭 기본 동작 안 되게

    btn.removeClass('active');
    $(this).addClass('active');

    $('.sub_tab').hide();  //모든 패널을 안 보이게

    var aaa = $(this).attr('href'); //클릭한 a의 속성 href의 값을 가져옴
    $(aaa).show(); //속성값(패널의 아이디 명과 동일) - 보여줌
});

btn.eq(0).trigger('click'); //자동으로 첫번째 a(tab01)을 누른상태가 됨

/* 햄버거 버튼 */
$('.btn_gnbOpen').click(function(){
    $('.gnb_wrap').addClass('active')
});

$('.btn_gnbClose').click(function(){
    $('.gnb_wrap').removeClass('active')
});

//메인페이지 - 공지사항tab
$('.content div:gt(0)').hide();

$('.tab li').click(function(){
    var nn = $(this).index(); //몇번째 li를 클릭한 건지 알아내서 변수에 넣어줌, 0부터 시작
    console.log(nn+'번째 li를 클릭했습니다.')

    $('.tab li').removeClass('select');
    $(this).addClass('select');

    $('.content div').hide();
    $('.content div').eq(nn).show();
});

//메인페이지 - 메인슬라이더
$('.main_visual_imgs').slick({
    autoplay: true,
    autoplaySpeed:1500,
    speed:1000,
    arrows:false,
    dots:true
});


//메인페이지 - ad slick
$('.ad_inner_imgs').slick({
    autoplay: true,
    autoplaySpeed:1500,
    speed:1000,
});