/**
 * BREAK THE BEET - Optimized JavaScript
 * Mobile nav, multi-step form, sticky CTA, animations
 */

(()=>{'use strict';

// === STATE ===
const state={currentStep:1,totalSteps:2};

// === DOM READY ===
const init=()=>{
  initNav();
  initStickyCTA();
  initForm();
  initAnimations();
  initGallery();
  setActivePage();
};

// === NAVIGATION ===
const initNav=()=>{
  const toggle=document.querySelector('.nav-toggle');
  const links=document.querySelector('.nav-links');
  const nav=document.querySelector('.nav');

  if(toggle&&links){
    toggle.onclick=()=>{
      toggle.classList.toggle('active');
      links.classList.toggle('active');
    };

    links.querySelectorAll('a').forEach(a=>{
      a.onclick=()=>{
        toggle.classList.remove('active');
        links.classList.remove('active');
      };
    });
  }

  // Sticky nav shadow
  if(nav){
    window.onscroll=()=>{
      nav.style.boxShadow=window.scrollY>100?'0 2px 10px rgba(0,0,0,.1)':'none';

      // Show sticky CTA
      const stickyCTA=document.querySelector('.sticky-cta');
      if(stickyCTA){
        stickyCTA.classList.toggle('visible',window.scrollY>500);
      }
    };
  }
};

// === ACTIVE PAGE ===
const setActivePage=()=>{
  const page=window.location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.nav-links a').forEach(a=>{
    if(a.getAttribute('href')===page||(page===''&&a.getAttribute('href')==='index.html')){
      a.classList.add('active');
    }
  });
};

// === STICKY CTA ===
const initStickyCTA=()=>{
  const cta=document.querySelector('.sticky-cta');
  if(cta){
    window.addEventListener('scroll',()=>{
      cta.classList.toggle('visible',window.scrollY>500);
    });
  }
};

// === MULTI-STEP FORM ===
const initForm=()=>{
  const form=document.querySelector('.contact-form');
  if(!form)return;

  const showStep=step=>{
    document.querySelectorAll('.form-section').forEach(s=>s.classList.remove('active'));
    document.getElementById(`step${step}`)?.classList.add('active');

    document.querySelectorAll('.form-step').forEach((el,i)=>{
      el.classList.toggle('active',i+1<=step);
    });

    const prev=document.getElementById('prevBtn');
    const next=document.getElementById('nextBtn');
    const submit=document.getElementById('submitBtn');

    if(prev)prev.style.display=step===1?'none':'inline-block';
    if(next)next.style.display=step===state.totalSteps?'none':'inline-block';
    if(submit)submit.style.display=step===state.totalSteps?'inline-block':'none';
  };

  const validateStep=step=>{
    const section=document.getElementById(`step${step}`);
    if(!section)return false;

    const inputs=section.querySelectorAll('input[required],select[required],textarea[required]');
    let valid=true;

    inputs.forEach(input=>{
      if(!input.value.trim()){
        valid=false;
        input.style.borderColor='#e74c3c';
      }else{
        input.style.borderColor='';
      }
    });

    return valid;
  };

  const next=document.getElementById('nextBtn');
  if(next){
    next.onclick=e=>{
      e.preventDefault();
      if(validateStep(state.currentStep)){
        state.currentStep++;
        showStep(state.currentStep);
        window.scrollTo({top:0,behavior:'smooth'});
      }else{
        alert('Please fill in all required fields.');
      }
    };
  }

  const prev=document.getElementById('prevBtn');
  if(prev){
    prev.onclick=e=>{
      e.preventDefault();
      state.currentStep--;
      showStep(state.currentStep);
      window.scrollTo({top:0,behavior:'smooth'});
    };
  }

  form.onsubmit=e=>{
    e.preventDefault();
    if(!validateStep(state.currentStep)){
      alert('Please fill in all required fields.');
      return;
    }

    const data=new FormData(form);
    const obj=Object.fromEntries(data);
    console.log('Form Data:',obj);

    alert('Thank you for your inquiry! We will get back to you within 24 hours.');
    form.reset();
    state.currentStep=1;
    showStep(state.currentStep);
  };

  showStep(state.currentStep);
};

// === SCROLL ANIMATIONS ===
const initAnimations=()=>{
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  },{threshold:0.1,rootMargin:'0px 0px -50px 0px'});

  document.querySelectorAll('.menu-item,.service-card,.gallery-item,.chef-content,.section-header').forEach(el=>{
    observer.observe(el);
  });
};

// === GALLERY LIGHTBOX ===
const initGallery=()=>{
  document.querySelectorAll('.gallery-item').forEach(item=>{
    item.onclick=()=>{
      const img=item.querySelector('img');
      if(!img)return;

      const lightbox=document.createElement('div');
      lightbox.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.95);display:flex;align-items:center;justify-content:center;z-index:10000;cursor:pointer';

      const lightboxImg=document.createElement('img');
      lightboxImg.src=img.src;
      lightboxImg.style.cssText='max-width:90%;max-height:90%;object-fit:contain';

      lightbox.appendChild(lightboxImg);
      document.body.appendChild(lightbox);

      lightbox.onclick=()=>document.body.removeChild(lightbox);
    };
  });
};

// === SMOOTH SCROLL ===
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.onclick=function(e){
    const href=this.getAttribute('href');
    if(href!=='#'){
      e.preventDefault();
      const target=document.querySelector(href);
      if(target){
        target.scrollIntoView({behavior:'smooth',block:'start'});
      }
    }
  };
});

// === INIT ===
if(document.readyState==='loading'){
  document.addEventListener('DOMContentLoaded',init);
}else{
  init();
}

})();
