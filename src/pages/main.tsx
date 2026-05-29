import React, { useState, useEffect } from 'react';
import '../css/main.css';

const NAV_LINKS = ['about', 'skills', 'projects', 'contact'];

const SKILLS = [
  { category: '자율주행', items: ['Path Planning', 'OpenCV'] },
  { category: '인공지능', items: ['Computer Vision', 'YOLO v8', 'TensorFlow'] },
  { category: '웹 개발', items: ['React', 'TypeScript', 'Node.js', 'FastAPI'] },
  { category: '도구 & 기타', items: ['Python', 'C', 'Git', 'Linux', 'Arduino'] },
];

const PROJECTS = [
  {
    title: 'NeuroSky Connect',
    desc: 'MindWave Mobile 2 뇌파 센서를 활용해 사용자의 졸음 상태를 실시간으로 감지·분류하여 졸음 운전 사고를 방지하는 프로젝트.',
    tags: ['Python', 'EEG', 'AI', 'NeuroSky', 'Social Distribution'],
    link: 'https://github.com/sw8744/NeuroSky_Connect',
  },
  {
    title: 'Baekwoon',
    desc: '유속·유량 센서와 Arduino를 연동해 폭우 피해 위험도를 실시간으로 지도 위에 시각화하는 재난구조 시스템.',
    tags: ['React', 'FastAPI', 'PostgreSQL', 'Arduino'],
    link: 'https://github.com/sw8744/Baekwoon',
  },
  {
    title: '뗀석기 분류 AI',
    desc: '뗀석기와 일반 돌멩이를 구별하는 TensorFlow 기반 이미지 분류 인공지능.',
    tags: ['Python', 'Deep Learning', 'Computer Vision'],
    link: 'https://github.com/sw8744/Ddensukki-Classification',
  },
  {
    title: '2024 TetraLee JRH',
    desc: '휠체어 탑승자를 위한 카메라 활용 높이 조절 기능과 디지털 소외 계층을 위한 UI/UX 개편이 이루어진 키오스크 개발 프로젝트.',
    tags: ['OpenCV', 'React', 'FastAPI', 'Arduino', 'Social Distribution'],
    link: 'https://github.com/sw8744/2024-TetraLee-JRH',
  },
  {
    title: 'Dolbat Toy Project',
    desc: '건국대학교 동아리 돌밭에서 진행하는 인지-판단 알고리즘 토이 프로젝트.',
    tags: ['Python', 'OpenCV', 'Autonomous'],
    link: 'https://github.com/sw8744/Dolbat-Toy-Project',
  },
  {
    title: 'Ion',
    desc: '교내 면학 불참 신청 시스템 개발 프로젝트.',
    tags: ['TypeScript', 'Web'],
    link: 'https://github.com/sw8744/ion',
  },
];

const MainPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="portfolio">
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__logo" onClick={() => scrollTo('hero')}>
          이승원
        </div>
        <button className="navbar__hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <button onClick={() => scrollTo(link)}>
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero */}
      <section id="hero" className="hero">
        <div className="hero__content">
          <p className="hero__greeting">안녕하세요,</p>
          <h1 className="hero__title">
            <span className="hero__name">이승원</span>입니다.
          </h1>
          <p className="hero__subtitle">자율주행 · 인공지능 · 웹 개발</p>
          <div className="hero__actions">
            <button className="btn btn--primary" onClick={() => scrollTo('projects')}>
              프로젝트 보기
            </button>
            <button className="btn btn--outline" onClick={() => scrollTo('contact')}>
              연락하기
            </button>
          </div>
        </div>
        <div className="hero__scroll-hint">
          <span>↓</span>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section about">
        <div className="section__inner">
          <h2 className="section__title">About</h2>
          <div className="about__grid">
            <div className="about__avatar">
              <img src="/profile.JPG" alt="이승원" className="avatar-img" />
            </div>
            <div className="about__text">
              <p>
                안녕하세요! 저는 <strong>자율주행</strong>과 <strong>인공지능</strong>, <strong>웹 개발</strong>을 아우르는 개발자 <strong>이승원</strong>입니다.
              </p>
              <p>
                자율주행, 인공지능, 웹 개발을 아우르는 다양한 프로젝트를 통해
                기술이 사람들의 삶에 실질적으로 기여할 수 있도록 노력합니다.
              </p>
              <p>
                기술의 사회적 기여를 높이는 것을 목표로, 디지털 소외 계층 접근성 개선부터
                안전 시스템 개발까지 폭넓은 문제에 도전하고 있습니다.
              </p>
              <div className="about__links">
                <a href="https://github.com/sw8744" target="_blank" rel="noreferrer" className="about__link">
                  GitHub
                </a>
                <a href="mailto:thislifewon@konkuk.ac.kr" className="about__link">
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section skills">
        <div className="section__inner">
          <h2 className="section__title">Skills</h2>
          <div className="skills__grid">
            {SKILLS.map(({ category, items }) => (
              <div key={category} className="skill-card">
                <h3 className="skill-card__title">{category}</h3>
                <ul className="skill-card__list">
                  {items.map((item) => (
                    <li key={item} className="skill-card__item">
                      <span className="skill-card__dot" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section projects">
        <div className="section__inner">
          <h2 className="section__title">Projects</h2>
          <div className="projects__grid">
            {PROJECTS.map(({ title, desc, tags, link }) => (
              <div key={title} className="project-card">
                <div className="project-card__header">
                  <h3 className="project-card__title">{title}</h3>
                  <a href={link} className="project-card__link" target="_blank" rel="noreferrer">
                    →
                  </a>
                </div>
                <p className="project-card__desc">{desc}</p>
                <div className="project-card__tags">
                  {tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact">
        <div className="section__inner">
          <h2 className="section__title">Contact</h2>
          <p className="contact__desc">
            새로운 기회나 협업 제안을 환영합니다. 언제든지 연락주세요!
          </p>
          <a href="mailto:thislifewon@konkuk.ac.kr" className="btn btn--primary contact__btn">
            이메일 보내기
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 이승원. Built with React.</p>
      </footer>
    </div>
  );
};

export default MainPage;
