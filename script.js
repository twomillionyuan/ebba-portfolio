(function () {
  "use strict";

  function PortfolioModel() {
    this.portfolioData = {
      hero: {
        kicker: "Engineering Student at KTH",
        name: "Ebba Adolphson",
        intro: "",
      },
      about: {
        summaryOne:
          "Hi, my name is Ebba and I am in the final year of my bachelor's degree in Media Technology at KTH.",
        summaryTwo:
          "Through my studies and work, I have gained experience in software development, teaching programming, and engineering. I love work where I get to combine technical tasks with working with people, whether that means coding, helping students, or coordinating projects.",
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
          category: "engineering",
          description:
            "Developing Eyevinn's Open Source Cloud product with other interns through programming, ongoing platform development, and functionality improvements.",
        },
        {
          role: "Teaching Assistant",
          organization: "Royal Institute of Technology (KTH)",
          period: "Sep 2024 - Present",
          category: "teaching",
          description:
            "Leading exercises and labs for first-year engineering students across bachelor's and master's programs. Supervising and examining students in problem-solving and logical reasoning.",
        },
        {
          role: "Events Coordinator",
          organization: "Sakerhetsbranschen",
          period: "Feb 2026 - Present",
          category: "coordination",
          description:
            "Supporting planning for the annual SakerhetsDagen security fair by coordinating venues and speakers, and handling customer service and inbound company inquiries.",
        },
        {
          role: "Usher, Waiter",
          organization:
            "Royal Swedish Opera, Confidencen, Ulriksdals Slottsteater",
          period: "Oct 2024 - Present",
          category: "service",
          description:
            "Welcoming and assisting guests before, during, and after events to ensure a safe and positive visitor experience, while also delivering high-quality cafe service.",
        },
      ],
      experienceFilters: [
        { key: "all", label: "All" },
        { key: "engineering", label: "Engineering" },
        { key: "teaching", label: "Teaching" },
        { key: "coordination", label: "Coordination" },
        { key: "service", label: "Service" },
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
      projects: [
        {
          title: "OpenEvents - Ticketing Platform",
          organization: "Eyevinn Technology (Intern Collaboration)",
          description:
            "Event planning and ticket buying/selling web app built with other interns at Eyevinn, inspired by platforms like Eventbrite.",
          linkLabel: "Visit live app",
          linkHref: "https://stsweevent.apps.osaas.io",
        },
        {
          title: "Bookboxd",
          organization: "KTH Course Project",
          description:
            "A book app I built in a team, inspired by Letterboxd and Goodreads.",
          linkLabel: "Visit live app",
          linkHref: "https://bookboxdd.web.app/",
        },
        {
          title: "Focus Planner",
          organization: "Planner App Project",
          description:
            "A simple planner app I built with Codex, from idea to MVP, and deployed live on OSC.",
          linkLabel: "Visit live app",
          linkHref: "https://focusplanner.apps.osaas.io/",
        },
        {
          title: "PageTurner",
          organization: "Book App Project",
          description:
            "A book app with search, lists, profiles, and CouchDB integration, built and deployed on OSC.",
          linkLabel: "Visit live app",
          linkHref: "https://pageturner.apps.osaas.io/",
        },
        {
          title: "TaskLog",
          organization: "Mobile App Project",
          description:
            "A to-do app I built with Expo and an OSC backend managed through MCP.",
          linkLabel: "View project",
          linkHref: "https://github.com/twomillionyuan/tasklog",
        },
        {
          title: "Booking Site for Thesis Meetings",
          organization: "Web App Project",
          description:
            "A booking site for thesis meeting slots, built with a simple admin flow and CouchDB.",
          linkLabel: "Visit live app",
          linkHref: "https://twomillionyuan.github.io/kandidatexamensarbete-booking/",
        },
        {
          title: "Deloitte Hackathon Project",
          organization: "Hackathon Team Project",
          description:
            "A team project built during a Deloitte hackathon.",
          linkLabel: "View project",
          linkHref: "https://github.com/twomillionyuan/DeloitteHackathonGroup5",
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
        copyEmail: "ebba.adolphson@gmail.com",
        links: [
          {
            label: "ebba.adolphson@gmail.com",
            href: "mailto:ebba.adolphson@gmail.com",
          },
          { label: "+46 76-025 94 55", href: "tel:+46760259455" },
          { label: "LinkedIn", href: "https://www.linkedin.com", external: true },
          {
            label: "GitHub",
            href: "https://github.com/twomillionyuan",
            external: true,
          },
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
      mainNav: document.getElementById("main-nav"),
      scrollProgress: document.getElementById("scroll-progress"),
      heroKicker: document.getElementById("hero-kicker"),
      heroName: document.getElementById("hero-name"),
      heroIntro: document.getElementById("hero-intro"),
      aboutSummaryOne: document.getElementById("about-summary-1"),
      aboutSummaryTwo: document.getElementById("about-summary-2"),
      quickFactsList: document.getElementById("quick-facts-list"),
      experienceFilters: document.getElementById("experience-filters"),
      experienceList: document.getElementById("experience-list"),
      educationList: document.getElementById("education-list"),
      engagementsList: document.getElementById("engagements-list"),
      projectsList: document.getElementById("projects-list"),
      technicalSkillsList: document.getElementById("technical-skills-list"),
      languagesList: document.getElementById("languages-list"),
      contactTitle: document.getElementById("contact-title"),
      contactText: document.getElementById("contact-text"),
      copyEmailButton: document.getElementById("copy-email-btn"),
      contactLinks: document.getElementById("contact-links"),
      toast: document.getElementById("ui-toast"),
      year: document.getElementById("year"),
    };
    this.toastTimer = null;
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
    if (value) {
      node.classList.remove("is-hidden");
    } else {
      node.classList.add("is-hidden");
    }
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
    this.setText(this.nodes.heroKicker, hero.kicker);
    this.setText(this.nodes.heroName, hero.name);
    this.setText(this.nodes.heroIntro, hero.intro);
    this.complete(callback);
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

  PortfolioView.prototype.renderExperienceFilters = function (
    filters,
    activeFilter,
    callback
  ) {
    var container = this.nodes.experienceFilters;
    var i;
    var item;
    var button;

    this.clearNode(container);

    if (!container) {
      this.complete(callback);
      return;
    }

    for (i = 0; i < filters.length; i += 1) {
      item = filters[i];
      button = document.createElement("button");
      button.type = "button";
      button.className = "filter-chip";
      button.setAttribute("data-filter", item.key);
      button.textContent = item.label;

      if (item.key === activeFilter) {
        button.classList.add("is-active");
      }

      container.appendChild(button);
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

  PortfolioView.prototype.renderProjects = function (items, callback) {
    var list = this.nodes.projectsList;
    var i;
    var item;
    var article;
    var title;
    var organization;
    var description;
    var link;

    this.clearNode(list);

    if (!list) {
      this.complete(callback);
      return;
    }

    for (i = 0; i < items.length; i += 1) {
      item = items[i];
      article = document.createElement("article");
      article.className = "card project-card";

      title = document.createElement("h3");
      title.textContent = item.title;

      organization = document.createElement("p");
      organization.className = "muted";
      organization.textContent = item.organization;

      description = document.createElement("p");
      description.textContent = item.description;

      link = document.createElement("a");
      link.className = "project-link";
      link.textContent = item.linkLabel;
      link.href = item.linkHref;
      link.target = "_blank";
      link.rel = "noreferrer";

      article.appendChild(title);
      article.appendChild(organization);
      article.appendChild(description);
      article.appendChild(link);
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

  PortfolioView.prototype.showToast = function (message) {
    var toast = this.nodes.toast;

    if (!toast) {
      return;
    }

    toast.textContent = message;
    toast.classList.add("is-visible");

    if (this.toastTimer) {
      window.clearTimeout(this.toastTimer);
    }

    this.toastTimer = window.setTimeout(function () {
      toast.classList.remove("is-visible");
    }, 1800);
  };

  PortfolioView.prototype.copyTextFallback = function (text) {
    var textArea = document.createElement("textarea");
    var isCopied = false;

    textArea.value = text;
    textArea.setAttribute("readonly", "readonly");
    textArea.style.position = "absolute";
    textArea.style.left = "-9999px";
    document.body.appendChild(textArea);
    textArea.select();

    try {
      isCopied = document.execCommand("copy");
    } catch (error) {
      isCopied = false;
    }

    document.body.removeChild(textArea);
    return isCopied;
  };

  PortfolioView.prototype.bindCopyEmail = function (email, callback) {
    var button = this.nodes.copyEmailButton;
    var self = this;

    if (!button || !email) {
      this.complete(callback);
      return;
    }

    button.addEventListener("click", function () {
      if (
        navigator.clipboard &&
        typeof navigator.clipboard.writeText === "function"
      ) {
        navigator.clipboard.writeText(email).then(
          function () {
            self.showToast("Email copied to clipboard");
          },
          function () {
            if (self.copyTextFallback(email)) {
              self.showToast("Email copied to clipboard");
            } else {
              self.showToast("Copy failed. Please copy manually.");
            }
          }
        );
      } else if (self.copyTextFallback(email)) {
        self.showToast("Email copied to clipboard");
      } else {
        self.showToast("Copy failed. Please copy manually.");
      }
    });

    this.complete(callback);
  };

  PortfolioView.prototype.bindExperienceFilter = function (onSelect, callback) {
    var container = this.nodes.experienceFilters;

    if (!container) {
      this.complete(callback);
      return;
    }

    container.addEventListener("click", function (event) {
      var target = event.target;

      if (!target || target.tagName !== "BUTTON") {
        return;
      }

      if (typeof onSelect === "function") {
        onSelect(target.getAttribute("data-filter") || "all");
      }
    });

    this.complete(callback);
  };

  PortfolioView.prototype.bindScrollProgress = function (callback) {
    var progressNode = this.nodes.scrollProgress;

    function updateProgress() {
      var doc = document.documentElement;
      var scrollTop = doc.scrollTop || document.body.scrollTop;
      var scrollHeight = doc.scrollHeight - doc.clientHeight;
      var ratio = 0;

      if (scrollHeight > 0) {
        ratio = (scrollTop / scrollHeight) * 100;
      }

      if (progressNode) {
        progressNode.style.width = String(ratio) + "%";
      }
    }

    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    updateProgress();
    this.complete(callback);
  };

  PortfolioView.prototype.bindSectionSpy = function (callback) {
    var nav = this.nodes.mainNav;
    var links;
    var sectionMap = [];
    var i;

    function setActiveLink(activeId) {
      links.forEach(function (link) {
        if (link.getAttribute("href") === "#" + activeId) {
          link.classList.add("is-active");
        } else {
          link.classList.remove("is-active");
        }
      });
    }

    function updateActive() {
      var currentId = "";
      var bestTop = -Infinity;

      sectionMap.forEach(function (entry) {
        var rect = entry.section.getBoundingClientRect();
        var trigger = window.innerHeight * 0.35;

        if (rect.top <= trigger && rect.top > bestTop) {
          bestTop = rect.top;
          currentId = entry.id;
        }
      });

      if (!currentId && sectionMap.length > 0) {
        currentId = sectionMap[0].id;
      }

      if (currentId) {
        setActiveLink(currentId);
      }
    }

    if (!nav) {
      this.complete(callback);
      return;
    }

    links = nav.querySelectorAll("a[href^='#']");

    for (i = 0; i < links.length; i += 1) {
      (function (link) {
        var href = link.getAttribute("href");
        var id = href ? href.slice(1) : "";
        var section = document.getElementById(id);

        if (section) {
          sectionMap.push({ id: id, section: section });
        }
      })(links[i]);
    }

    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    updateActive();
    this.complete(callback);
  };

  PortfolioView.prototype.bindHeroTilt = function (callback) {
    var frame = this.nodes.heroPhotoFrame;

    if (!frame) {
      this.complete(callback);
      return;
    }

    frame.addEventListener("mousemove", function (event) {
      var rect = frame.getBoundingClientRect();
      var x = event.clientX - rect.left;
      var y = event.clientY - rect.top;
      var centerX = rect.width / 2;
      var centerY = rect.height / 2;
      var rotateY = ((x - centerX) / centerX) * 6;
      var rotateX = ((centerY - y) / centerY) * 6;

      frame.style.transform =
        "perspective(800px) rotateX(" +
        String(rotateX) +
        "deg) rotateY(" +
        String(rotateY) +
        "deg)";
    });

    frame.addEventListener("mouseleave", function () {
      frame.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg)";
    });

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
    this.data = null;
    this.activeExperienceFilter = "all";
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

  PortfolioPresenter.prototype.getFilteredExperience = function () {
    var filter = this.activeExperienceFilter;
    var allItems = this.data ? this.data.experience : [];

    if (!filter || filter === "all") {
      return allItems;
    }

    return allItems.filter(function (item) {
      return item.category === filter;
    });
  };

  PortfolioPresenter.prototype.renderExperienceState = function (callback) {
    var self = this;
    var filters = this.data ? this.data.experienceFilters : [];
    var items = this.getFilteredExperience();

    this.view.renderExperienceFilters(
      filters,
      this.activeExperienceFilter,
      function () {
        self.view.renderExperience(items, callback);
      }
    );
  };

  PortfolioPresenter.prototype.handleExperienceFilterChange = function (
    filterKey
  ) {
    var self = this;

    self.activeExperienceFilter = filterKey || "all";
    self.renderExperienceState(function () {
      return;
    });
  };

  PortfolioPresenter.prototype.init = function () {
    var self = this;

    this.model.getPortfolioData(function (error, data) {
      var tasks;

      if (error) {
        self.view.showError("Failed to load portfolio data.");
        return;
      }

      self.data = data;

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
          self.renderExperienceState(next);
        },
        function (next) {
          self.view.bindExperienceFilter(function (filterKey) {
            self.handleExperienceFilterChange(filterKey);
          }, next);
        },
        function (next) {
          self.view.renderEducation(data.education, next);
        },
        function (next) {
          self.view.renderEngagements(data.engagements, next);
        },
        function (next) {
          self.view.renderProjects(data.projects, next);
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
          self.view.bindCopyEmail(data.contact.copyEmail, next);
        },
        function (next) {
          self.view.bindScrollProgress(next);
        },
        function (next) {
          self.view.bindSectionSpy(next);
        },
        function (next) {
          self.view.bindHeroTilt(next);
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
