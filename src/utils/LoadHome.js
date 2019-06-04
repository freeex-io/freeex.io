export const LoadHome = () => {
  const body = document.getElementById('app-body');
  body.classList.add('loaded');
  body.classList.remove('is-loading');

  const nav = document.getElementsByTagName('aside')[0];
  nav.style.transform = 'translate(0%, -50%) matrix(1, 0, 0, 1, 0, 0)';
  nav.style.opacity = 1;

  const since = document.getElementsByClassName('since')[0];
  since.getElementsByTagName('span')[0].style.width = '3vw';
  since.getElementsByTagName('p')[0].style.opacity = 1;
  since.getElementsByTagName('p')[0].style.left = 0;

  const introText = document.getElementsByClassName('intro-text')[0];
  const divLength = introText.getElementsByTagName('div').length;
  for (let i = 0; i < divLength; i++) {
    const ele = introText.getElementsByTagName('div')[i].getElementsByTagName('h4')[0]
    ele.style.opacity = 1;
  }

  const introSubText = document.getElementsByClassName('intro-subtext')[0];
  introSubText.style.opacity = 1;

  const introSubLink = document.getElementsByClassName('intro-sublink')[0];
  introSubLink.style.opacity = 1;
};

export const HideIntro = () => {
  const intro = document.getElementsByClassName('row')[0];
  intro.style.opacity = 0;

  const introTitle = document.getElementsByClassName('intro-title')[0];
  introTitle.style.opacity = 0;
};

export const ShowIntro = () => {
  const intro = document.getElementsByClassName('row')[0];
  intro.style.opacity = 1;

  setTimeout(() => {
    const introTitle = document.getElementsByClassName('intro-title')[0];
    introTitle.style.opacity = 1;
  }, 500);
}

export const ShowContent = () => {
  const banner = document.getElementsByClassName('banner')[0];
  banner.style.height = '50%';
};

export const HideContent = () => {
  const banner = document.getElementsByClassName('banner')[0];
  banner.style.height = 0;

  ResetAside();
};

export const ResetAside = () => {
  const side = document.getElementsByClassName('side')[0];
  const divLength = side.getElementsByTagName('div').length;
  for (let i = 0; i < divLength; i++) {
    const ele = side.getElementsByTagName('div')[i].getElementsByTagName('p')[0]
    ele.style.removeProperty('visibility');
    ele.style.removeProperty('opacity');
    ele.style.removeProperty('transform');
  }

  const back = document.getElementsByClassName('back')[0];
  const backLength = back.getElementsByClassName('back-img').length;
  for (let i = 0; i < backLength; i++) {
    const ele = back.getElementsByClassName('back-img')[i];
    ele.style.removeProperty('opacity');
  }

  const center = document.getElementsByClassName('center')[0];
  const centerLength = center.getElementsByClassName('center-img').length;
  for (let i = 0; i < centerLength; i++) {
    const ele = center.getElementsByClassName('center-img')[i];
    ele.classList.remove('is-active');
  }

  const front = document.getElementsByClassName('front-info')[0];
  front.style.removeProperty('opacity');
  const frontLength = front.getElementsByClassName('front-item').length;
  for (let i = 0; i < frontLength; i++) {
    const ele = front.getElementsByClassName('front-item')[i];
    ele.classList.remove('is-active');
  }
}