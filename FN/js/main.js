const overlay = document.querySelector('.overlay');

// ===== 검색창 열기/닫기 =====
document.querySelector('.Search-btn').addEventListener('click', () => {
    document.querySelector('.search_wrap').classList.toggle('on');

    if (document.querySelector('.search_wrap').classList.contains('on')) {
        overlay.classList.add('on');
    } else {
        overlay.classList.remove('on');
    }
});

document.querySelector('.sh_btn_close').addEventListener('click', () => {
    document.querySelector('.search_wrap').classList.remove('on');
    overlay.classList.remove('on');
});

// ===== 메뉴 열기/닫기 =====
document.querySelectorAll('.top-btn').forEach((button) => {
    button.addEventListener('click', () => {
        const parentli = button.closest('li');
        const submenu = parentli.querySelector('.sub-wrap');

        // 다른 메뉴 닫기
        document.querySelectorAll('.sub-wrap.show').forEach(openMenu => {
            if (openMenu !== submenu) {
                openMenu.classList.remove('show');
            }
        });

        // 현재 메뉴 토글
        const isOpen = submenu.classList.toggle('show');

        // overlay 상태
        if (isOpen) {
            overlay.classList.add('on');
        } else {
            overlay.classList.remove('on');
        }
    });
});

document.querySelectorAll('.btn_close').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        closeBtn.closest('.sub-wrap').classList.remove('show');
        overlay.classList.remove('on');
    });
});

// ===== overlay 클릭 시 모든 창 닫기 =====
overlay.addEventListener('mouseenter', () => {
  // 검색창이 열려 있으면 동작하지 않음
  if(document.querySelector('.search_wrap').classList.contains('on')){return;}
    document.querySelectorAll('.sub-wrap.show').forEach(menu => {
        menu.classList.remove('show');
    });
    overlay.classList.remove('on');
});


// 랭기지 버튼
window.addEventListener('DOMContentLoaded',()=>{
  const langBtn=document.querySelector('.lang-btn')
  const langSub=document.querySelector('.language-sub')
  const headerbg=document.querySelector('.header-bg')

  // 마우스가 버튼에 들어왔을 때
  langBtn.addEventListener('mouseenter',()=>{
    langSub.style.display='block';
    headerbg.style.backgroundColor='#fff'
  })

  // 마우스가 버튼에서 나갔을 때 (서브메뉴 포함)
  langBtn.parentElement.addEventListener('mouseleave', () => {
    langSub.style.display='none';
    headerbg.style.backgroundColor='transparent';
  })
})


// 이벤트 Swiper
const Eventswiper = new Swiper('.event-wrap .swiper', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper .swiper-pagination',
    type:'bullets',
    clickable:true,
  },

  navigation: {
    nextEl: '.swiper .swiper-button-next',
    prevEl: '.swiper .swiper-button-prev',
  },
})