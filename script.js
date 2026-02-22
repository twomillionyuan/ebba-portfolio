(function () {
  "use strict";

  function PortfolioModel() {
    this.portfolioData = {
      hero: {
        kicker: "Engineering Student at KTH",
        name: "Ebba Adolphson",
        intro:
          "I build digital products, support student learning, and help teams execute ambitious projects. I am currently focused on software development, product functionality, and collaborative problem-solving.",
        image: {
          src: "assets/ebba-profile.jpg",
          alt: "Portrait of Ebba Adolphson",
          fallbackInitials: "EA",
        },
      },
      about: {
        summaryOne:
          "MSc Media Technology student at the Royal Institute of Technology (KTH), with hands-on experience in software development, teaching, communication, and event coordination.",
        summaryTwo:
          "I enjoy combining technical depth with people-facing responsibilities, from coding and product improvement to guiding students and building strong company relationships.",
      },
      quickFacts: [
        {
          label: "Current role",
          value: "Software Developer Intern at Eyevinn Technology",
        },
        {
          label: "Current studies",
          value: "MSc Media Technology, KTH",
        },
        {
          label: "Location",
          value: "Stockholm, Sweden",
        },
        {
          label: "Focus",
          value: "Software engineering, product development, and collaboration",
        },
      ],
      experience: [
        {
          role: "Software Developer Intern",
          organization: "Eyevinn Technology",
          period: "Jan 2026 - Present",
          description:
            "Developing Eyevinn's Open Source Cloud product with other interns through programming, ongoing platform development, and functionality improvements.",
        },
        {
          role: "Teaching Assistant",
          organization: "Royal Institute of Technology (KTH)",
          period: "Sep 2024 - Present",
          description:
            "Leading exercises and labs for first-year engineering students across bachelor's and master's programs. Supervising and examining students in problem-solving and logical reasoning.",
        },
        {
          role: "Events Coordinator",
          organization: "Sakerhetsbranschen",
          period: "Feb 2026 - Present",
          description:
            "Supporting planning for the annual SakerhetsDagen security fair by coordinating venues and speakers, and handling customer service and inbound company inquiries.",
        },
        {
          role: "Usher, Waiter",
          organization:
            "Royal Swedish Opera, Confidencen, Ulriksdals Slottsteater",
          period: "Oct 2024 - Present",
          description:
            "Welcoming and assisting guests before, during, and after events to ensure a safe and positive visitor experience, while also delivering high-quality cafe service.",
        },
      ],
      education: [
        {
          school: "Royal Institute of Technology (KTH)",
          program: "MSc Media Technology",
          period: "Aug 2023 - Present",
        },
        {
          school: "Kungsholmens Gymnasium",
          program: "Natural Science Programme",
          period: "Aug 2020 - Jun 2023",
        },
        {
          school: "Cambridge English",
          program: "B2 First Certificate - Grade 181 (A)",
          period: "2020",
        },
      ],
      engagements: [
        {
          title: "Head of Business Relations",
          organization: "KTH - Chapter of Media Technology",
          period: "Jul 2025 - Present",
          description:
            "Responsible for leading business relations between companies and the Media Technology Chapter.",
        },
        {
          title: "Company Host",
          organization: "KTH - THS Armada, Medias Branschdag",
          period: "2023 - 2025",
          description:
            "Responsible for hosting companies during fairs and supporting event execution.",
        },
        {
          title: "PR Manager",
          organization: "KTH - Chapter of Media Technology",
          period: "2023 - 2025",
          description:
            "Managed social channels for committees and associations in the Media Technology Chapter.",
        },
      ],
      skills: [
        "Python",
        "Algorithms",
        "JavaScript",
        "React",
        "HTML",
        "CSS",
        "Object-Oriented Programming",
        "Figma",
      ],
      languages: [
        { name: "Swedish", level: "Mother tongue" },
        { name: "English", level: "Fluent" },
        { name: "Chinese", level: "Basic" },
        { name: "Spanish", level: "Basic" },
      ],
      contact: {
        title: "Let's work together",
        message:
          "I'm open to opportunities where I can contribute with engineering, communication, and leadership.",
        links: [
          {
            label: "ebba.adolphson@gmail.com",
            href: "mailto:ebba.adolphson@gmail.com",
          },
          { label: "+46 76-025 94 55", href: "tel:+46760259455" },
          { label: "LinkedIn", href: "https://www.linkedin.com", external: true },
        ],
      },
    };
  }

  PortfolioModel.prototype.getPortfolioData = function (callback) {
    var self = this;
    window.setTimeout(function () {
      callback(null, self.portfolioData);
    }, 0);
  };

  function PortfolioView() {
    this.nodes = {
      heroKicker: document.getElementById("hero-kicker"),
      heroName: document.getElementById("hero-name"),
      heroIntro: document.getElementById("hero-intro"),
      heroImage: document.getElementById("hero-image"),
      heroImageFallback: document.getElementById("hero-image-fallback"),
      aboutSummaryOne: document.getElementById("about-summary-1"),
      aboutSummaryTwo: document.getElementById("about-summary-2"),
      quickFactsList: document.getElementById("quick-facts-list"),
      experienceList: document.getElementById("experience-list"),
      educationList: document.getElementById("education-list"),
      engagementsList: document.getElementById("engagements-list"),
      technicalSkillsList: document.getElementById("technical-skills-list"),
      languagesList: document.getElementById("languages-list"),
      contactTitle: document.getElementById("contact-title"),
      contactText: document.getElementById("contact-text"),
      contactLinks: document.getElementById("contact-links"),
      year: document.getElementById("year"),
    };
  }

  PortfolioView.prototype.complete = function (callback) {
    if (typeof callback === "function") {
      callback();
    }
  };

  PortfolioView.prototype.clearNode = function (node) {
    if (!node) {
      return;
    }
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
  };

  PortfolioView.prototype.setText = function (node, value) {
    if (!node) {
      return;
    }
    node.textContent = value;
  };

  PortfolioView.prototype.setVisibility = function (node, isVisible) {
    if (!node) {
      return;
    }
    if (isVisible) {
      node.classList.remove("is-hidden");
    } else {
      node.classList.add("is-hidden");
    }
  };

  PortfolioView.prototype.renderHero = function (hero, callback) {
    var imageData = hero.image || {};
    var imageNode = this.nodes.heroImage;
    var fallbackNode = this.nodes.heroImageFallback;
    var self = this;

    function finalize() {
      if (imageNode) {
        imageNode.onload = null;
        imageNode.onerror = null;
      }
      self.complete(callback);
    }

    function showFallback() {
      self.setVisibility(imageNode, false);
      self.setVisibility(fallbackNode, true);
    }

    function showImage() {
      self.setVisibility(fallbackNode, false);
      self.setVisibility(imageNode, true);
    }

    this.setText(this.nodes.heroKicker, hero.kicker);
    this.setText(this.nodes.heroName, hero.name);
    this.setText(this.nodes.heroIntro, hero.intro);

    if (fallbackNode) {
      this.setText(fallbackNode, imageData.fallbackInitials || "EA");
    }

    if (!imageNode) {
      this.complete(callback);
      return;
    }

    imageNode.alt = imageData.alt || "Profile photo";

    if (!imageData.src) {
      showFallback();
      finalize();
      return;
    }

    imageNode.onload = function () {
      showImage();
      finalize();
    };

    imageNode.onerror = function () {
      showFallback();
      finalize();
    };

    imageNode.src = imageData.src;
  };

  PortfolioView.prototype.renderAbout = function (about, callback) {
    this.setText(this.nodes.aboutSummaryOne, about.summaryOne);
    this.setText(this.nodes.aboutSummaryTwo, about.summaryTwo);
    this.complete(callback);
  };

  PortfolioView.prototype.renderQuickFacts = function (facts, callback) {
    var list = this.nodes.quickFactsList;
    var i;
    var item;
    var strong;
    var text;
    var li;

    this.clearNode(list);

    if (!list) {
      this.complete(callback);
      return;
    }

    for (i = 0; i < facts.length; i += 1) {
      item = facts[i];
      li = document.createElement("li");
      strong = document.createElement("strong");
      text = document.createTextNode(" " + item.value);

      strong.textContent = item.label + ":";
      li.appendChild(strong);
      li.appendChild(text);
      list.appendChild(li);
    }

    this.complete(callback);
  };

  PortfolioView.prototype.renderExperience = function (items, callback) {
    var list = this.nodes.experienceList;
    var i;
    var item;
    var article;
    var meta;
    var title;
    var org;
    var period;
    var description;

    this.clearNode(list);

    if (!list) {
      this.complete(callback);
      return;
    }

    for (i = 0; i < items.length; i += 1) {
      item = items[i];
      article = document.createElement("article");
      article.className = "timeline-item";

      meta = document.createElement("div");
      meta.className = "timeline-meta";

      title = document.createElement("h3");
      title.textContent = item.role;

      org = document.createElement("p");
      org.textContent = item.organization;

      period = document.createElement("span");
      period.textContent = item.period;

      description = document.createElement("p");
      description.textContent = item.description;

      meta.appendChild(title);
      meta.appendChild(org);
      meta.appendChild(period);

      article.appendChild(meta);
      article.appendChild(description);
      list.appendChild(article);
    }

    this.complete(callback);
  };

  PortfolioView.prototype.renderEducation = function (items, callback) {
    var list = this.nodes.educationList;
    var i;
    var item;
    var article;
    var school;
    var program;
    var period;

    this.clearNode(list);

    if (!list) {
      this.complete(callback);
      return;
    }

    for (i = 0; i < items.length; i += 1) {
      item = items[i];
      article = document.createElement("article");
      article.className = "card";

      school = document.createElement("h3");
      school.textContent = item.school;

      program = document.createElement("p");
      program.textContent = item.program;

      period = document.createElement("p");
      period.className = "muted";
      period.textContent = item.period;

      article.appendChild(school);
      article.appendChild(program);
      article.appendChild(period);
      list.appendChild(article);
    }

    this.complete(callback);
  };

  PortfolioView.prototype.renderEngagements = function (items, callback) {
    var list = this.nodes.engagementsList;
    var i;
    var item;
    var article;
    var title;
    var organization;
    var period;
    var description;

    this.clearNode(list);

    if (!list) {
      this.complete(callback);
      return;
    }

    for (i = 0; i < items.length; i += 1) {
      item = items[i];
      article = document.createElement("article");
      article.className = "card";

      title = document.createElement("h3");
      title.textContent = item.title;

      organization = document.createElement("p");
      organization.textContent = item.organization;

      period = document.createElement("p");
      period.className = "muted";
      period.textContent = item.period;

      description = document.createElement("p");
      description.textContent = item.description;

      article.appendChild(title);
      article.appendChild(organization);
      article.appendChild(period);
      article.appendChild(description);
      list.appendChild(article);
    }

    this.complete(callback);
  };

  PortfolioView.prototype.renderSkills = function (skills, callback) {
    var list = this.nodes.technicalSkillsList;
    var i;
    var li;

    this.clearNode(list);

    if (!list) {
      this.complete(callback);
      return;
    }

    for (i = 0; i < skills.length; i += 1) {
      li = document.createElement("li");
      li.textContent = skills[i];
      list.appendChild(li);
    }

    this.complete(callback);
  };

  PortfolioView.prototype.renderLanguages = function (languages, callback) {
    var list = this.nodes.languagesList;
    var i;
    var item;
    var li;
    var strong;
    var text;

    this.clearNode(list);

    if (!list) {
      this.complete(callback);
      return;
    }

    for (i = 0; i < languages.length; i += 1) {
      item = languages[i];
      li = document.createElement("li");
      strong = document.createElement("strong");
      text = document.createTextNode(" " + item.level);

      strong.textContent = item.name + ":";
      li.appendChild(strong);
      li.appendChild(text);
      list.appendChild(li);
    }

    this.complete(callback);
  };

  PortfolioView.prototype.renderContact = function (contact, callback) {
    var linksNode = this.nodes.contactLinks;
    var i;
    var item;
    var link;

    this.setText(this.nodes.contactTitle, contact.title);
    this.setText(this.nodes.contactText, contact.message);

    this.clearNode(linksNode);

    if (!linksNode) {
      this.complete(callback);
      return;
    }

    for (i = 0; i < contact.links.length; i += 1) {
      item = contact.links[i];
      link = document.createElement("a");
      link.textContent = item.label;
      link.href = item.href;

      if (item.external) {
        link.target = "_blank";
        link.rel = "noreferrer";
      }

      linksNode.appendChild(link);
    }

    this.complete(callback);
  };

  PortfolioView.prototype.setFooterYear = function (callback) {
    if (this.nodes.year) {
      this.nodes.year.textContent = String(new Date().getFullYear());
    }
    this.complete(callback);
  };

  PortfolioView.prototype.bindRevealAnimation = function (callback) {
    var reveals = document.querySelectorAll(".reveal");
    var observer;

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        function (entries, obs) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );

      reveals.forEach(function (section, index) {
        section.style.transitionDelay = String(Math.min(index * 55, 280)) + "ms";
        observer.observe(section);
      });
    } else {
      reveals.forEach(function (section) {
        section.classList.add("visible");
      });
    }

    this.complete(callback);
  };

  PortfolioView.prototype.showError = function (message) {
    if (window.console && typeof window.console.error === "function") {
      window.console.error(message);
    }
  };

  function PortfolioPresenter(model, view) {
    this.model = model;
    this.view = view;
  }

  PortfolioPresenter.prototype.runSeries = function (tasks, done) {
    var index = 0;

    function next() {
      var task;

      if (index >= tasks.length) {
        if (typeof done === "function") {
          done();
        }
        return;
      }

      task = tasks[index];
      index += 1;
      task(next);
    }

    next();
  };

  PortfolioPresenter.prototype.init = function () {
    var self = this;

    this.model.getPortfolioData(function (error, data) {
      var tasks;

      if (error) {
        self.view.showError("Failed to load portfolio data.");
        return;
      }

      tasks = [
        function (next) {
          self.view.setFooterYear(next);
        },
        function (next) {
          self.view.renderHero(data.hero, next);
        },
        function (next) {
          self.view.renderAbout(data.about, next);
        },
        function (next) {
          self.view.renderQuickFacts(data.quickFacts, next);
        },
        function (next) {
          self.view.renderExperience(data.experience, next);
        },
        function (next) {
          self.view.renderEducation(data.education, next);
        },
        function (next) {
          self.view.renderEngagements(data.engagements, next);
        },
        function (next) {
          self.view.renderSkills(data.skills, next);
        },
        function (next) {
          self.view.renderLanguages(data.languages, next);
        },
        function (next) {
          self.view.renderContact(data.contact, next);
        },
        function (next) {
          self.view.bindRevealAnimation(next);
        },
      ];

      self.runSeries(tasks, function () {
        return;
      });
    });
  };

  function bootstrap() {
    var model = new PortfolioModel();
    var view = new PortfolioView();
    var presenter = new PortfolioPresenter(model, view);
    presenter.init();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootstrap);
  } else {
    bootstrap();
  }
})();
