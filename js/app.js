// ===================================
// 内容索引配置
// 这个文件可以通过脚本自动生成，或手动维护
// ===================================
const contentIndex = {
    // 研究成果索引
    research: [
         {
            id: 'fof',
            file: 'research/fof.md',
            title: 'FOF: A Fine-Grained Object Detection and Feature Extraction end-to-end Network',
            description: 'FOF是基于YOLOV7改进的，旨在提出一种能够定位细粒度目标的同时能够提取其特征向量，解决细粒度目标定位和分类任务网络无法识别新增类别的问题以及常用两阶段算法中先定位每个目标再分别提取特征的效率问题',
            icon: '👁️',
            date: '2024-02',
            category: '目标检查'
        },
        {
            id: 'iris-security',
            file: 'research/iris-security.md',
            title: '电力系统高等级安防技术',
            description: '以虹膜识别技术为核心，开发电力系统高等级安防系统，研究以虹膜为秘钥的高等级加密技术。',
            icon: '👁️',
            date: '2024-02',
            category: '安防技术'
        },
        {
            id: 'human-visual-computing',
            file: 'research/human-visual-computing.md',
            title: '以人为中心的视觉计算',
            description: '包括人体姿态估计、姿势识别、群体运动感知、情感计算等，应用于智能电网操作员安全防护及威胁预警。',
            icon: '🧠',
            date: '2024-01',
            category: '视觉计算'
        },
        {
            id: '3d-perception',
            file: 'research/3d-perception.md',
            title: '电网三维场景立体感知',
            description: '应用于飞行机器人巡检自主导航、避障，以及电网高精度三维地理信息系统开发。',
            icon: '🌐',
            date: '2023-12',
            category: '三维感知'
        },
        {
            id: 'equipment-fault-diagnosis',
            file: 'research/equipment-fault-diagnosis.md',
            title: '电力设备检测及故障诊断',
            description: '基于深度神经网络的电力设备检测及故障诊断技术，实现设备状态的智能监测。',
            icon: '🔍',
            date: '2023-11',
            category: '智能诊断'
        },
        {
            id: 'advanced-visual-tech',
            file: 'research/advanced-visual-tech.md',
            title: '前沿视觉技术与边缘计算',
            description: '涵盖高精度视觉导航、图像哈希、图像隐写及视觉缺陷检测边缘计算技术。',
            icon: '🚀',
            date: '2023-10',
            category: '前沿技术'
        }
    ],

    // 新闻资讯索引
    news: [
        {
            id: '2024-02-15-ieee-publication',
            file: 'news/2024-02-15-ieee-publication.md',
            title: '团队在IEEE TPWS发表最新研究成果',
            excerpt: '我们的最新研究成果在电力系统领域顶级期刊IEEE Transactions on Power Systems上发表。',
            date: '2024-02-15',
            icon: '📰',
            category: '学术成果'
        },
        {
            id: '2024-01-20-nsfc-grant',
            file: 'news/2024-01-20-nsfc-grant.md',
            title: '获批国家自然科学基金重点项目',
            excerpt: '由张教授主持的"智能电网大数据分析理论与方法"项目获批国家自然科学基金重点项目资助。',
            date: '2024-01-20',
            icon: '🏆',
            category: '项目获批'
        },
        {
            id: '2023-12-10-workshop',
            file: 'news/2023-12-10-workshop.md',
            title: '主办智能电网国际研讨会',
            excerpt: '我团队成功主办"智能电网与能源互联网"国际研讨会，来自10个国家的专家学者参会。',
            date: '2023-12-10',
            icon: '🌍',
            category: '学术交流'
        },
        {
            id: '2023-11-05-partnership',
            file: 'news/2023-11-05-partnership.md',
            title: '与国家电网签署战略合作协议',
            excerpt: '我团队与国家电网公司签署战略合作协议，共同推进智能电网技术研发。',
            date: '2023-11-05',
            icon: '🤝',
            category: '合作交流'
        },
        {
            id: '2023-10-15-young-talent',
            file: 'news/2023-10-15-young-talent.md',
            title: '李博士入选青年人才计划',
            excerpt: '祝贺李博士入选中国科协青年人才托举工程，这是对她科研工作的充分肯定。',
            date: '2023-10-15',
            icon: '🎉',
            category: '荣誉奖项'
        },
        {
            id: '2023-10-01-best-paper',
            file: 'news/2023-10-01-best-paper.md',
            title: '王研究员获最佳论文奖',
            excerpt: '王研究员在CIKM 2023发表的论文获得大会最佳论文奖。',
            date: '2023-10-01',
            icon: '📜',
            category: '荣誉奖项'
        }
    ],

    // 团队成员（静态配置，因为不需要单独的文章页面）
    team: [
        {
            id: 'team-1',
            name: '张教授',
            title: '团队负责人 / 教授',
            avatar: '👨‍🔬',
            bio: '从事电力系统安防与视觉计算研究20余年，主持国家级重点项目多项。',
            email: 'zhang@lab.edu.cn',
            research: '虹膜安防、视觉计算'
        },
        {
            id: 'team-2',
            name: '李博士',
            title: '副教授',
            avatar: '👩‍🔬',
            bio: '专注于以人为中心的视觉计算与情感计算研究，发表高水平论文50余篇。',
            email: 'li@lab.edu.cn',
            research: '姿态估计、情感计算'
        },
        {
            id: 'team-3',
            name: '王研究员',
            title: '助理研究员',
            avatar: '👨‍💻',
            bio: '主要研究电网三维场景感知与飞行机器人自主导航技术。',
            email: 'wang@lab.edu.cn',
            research: '三维感知、无人机导航'
        },
        {
            id: 'team-4',
            name: '赵工程师',
            title: '技术负责人',
            avatar: '👷',
            bio: '负责深度学习算法在电力设备故障诊断中的工程化应用。',
            email: 'zhao@lab.edu.cn',
            research: '故障诊断、深度学习'
        },
        {
            id: 'team-5',
            name: '刘博士',
            title: '博士后研究员',
            avatar: '👨‍🎓',
            bio: '研究方向为边缘计算与前沿视觉技术在电力巡检中的应用。',
            email: 'liu@lab.edu.cn',
            research: '边缘计算、视觉导航'
        },
        {
            id: 'team-6',
            name: '陈研究生',
            title: '博士研究生',
            avatar: '👩‍🎓',
            bio: '主攻虹膜识别高等级加密算法研究。',
            email: 'chen@lab.edu.cn',
            research: '虹膜识别、加密算法'
        },
        {
            id: 'team-7',
            name: '杨研究生',
            title: '硕士研究生',
            avatar: '👨‍🎓',
            bio: '研究方向为基于机器视觉的电力设备缺陷检测。',
            email: 'yang@lab.edu.cn',
            research: '缺陷检测、图像处理'
        },
        {
            id: 'team-8',
            name: '周研究生',
            title: '硕士研究生',
            avatar: '👩‍🎓',
            bio: '研究方向为电网三维重建与数字孪生技术。',
            email: 'zhou@lab.edu.cn',
            research: '三维重建、数字孪生'
        }
    ],

    publications: [
        {
            id: 'pub-1',
            title: 'IrisMarkNet: Iris feature watermarking embedding and extraction network for image copyright protection',
            authors: 'Shen W, Rong J, Liu Y, et al.',
            venue: 'Applied Intelligence',
            year: '2023',
            volume: '53(9)',
            pages: '9992-10008',
            doi: '10.1007/s10489-022-04047-5',
            links: { pdf: '#', doi: 'https://link.springer.com/article/10.1007/s10489-022-04047-5' }
        },
        {
            id: 'pub-2',
            title: 'IrisST-Net for iris segmentation and contour parameters extraction',
            authors: 'Liu Y, Shen W, Wu D, et al.',
            venue: 'Applied Intelligence',
            year: '2023',
            volume: '53(9)',
            pages: '11267-11281',
            doi: '10.1007/s10489-022-03973-8',
            links: { pdf: '#', doi: 'https://link.springer.com/article/10.1007/s10489-022-03973-8' }
        },
        {
            id: 'pub-3',
            title: 'FOF: A Fine-Grained Object Detection and Feature Extraction end-to-end Network',
            authors: 'Shen W, Chen J P, Shao J.',
            venue: 'International Journal of Multimedia Information Retrieval ',
            year: '2023',
            volume: '',
            pages: '',
            doi: '10.1007/s13735-023-00306-4',
            links: { pdf: '#', doi: 'https://link.springer.com/article/10.1007/s13735-023-00306-4' }
        }
    ]
};

// ===================================
// 路由与页面管理
// ===================================
class Router {
    constructor() {
        this.routes = {};
        this.currentRoute = null;
        this.init();
    }

    init() {
        // 监听哈希变化
        window.addEventListener('hashchange', () => this.handleRoute());
        window.addEventListener('load', () => this.handleRoute());

        // 处理所有链接点击
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a');
            if (link && link.getAttribute('href')?.startsWith('#')) {
                e.preventDefault();
                const href = link.getAttribute('href').substring(1);
                if (href) {
                    this.navigate(href);
                }
            }
        });
    }

    handleRoute() {
        const hash = window.location.hash.slice(1) || 'home';
        this.navigate(hash, false);
    }

    navigate(route, updateHash = true) {
        // 解析路由 (支持 article/route-id 格式)
        const [page, articleId] = route.split('/');

        if (page === 'article' && articleId) {
            this.showArticle(articleId);
        } else if (this.routes[page]) {
            this.showPage(page);
        } else {
            this.showPage('home');
        }

        if (updateHash) {
            window.location.hash = route;
        }

        // 更新导航激活状态
        this.updateNavActive(page);
    }

    showPage(pageName) {
        // 隐藏所有页面
        document.querySelectorAll('.page-section').forEach(section => {
            section.classList.remove('active');
        });

        // 显示目标页面
        const targetPage = document.getElementById(pageName);
        if (targetPage) {
            targetPage.classList.add('active');
            this.currentRoute = pageName;

            // 加载页面内容
            if (this.routes[pageName]) {
                this.routes[pageName]();
            }

            // 滚动到顶部
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    showArticle(articleId) {
        // 隐藏所有页面
        document.querySelectorAll('.page-section').forEach(section => {
            section.classList.remove('active');
        });

        // 显示文章页面
        const articleSection = document.getElementById('article');
        if (articleSection) {
            articleSection.classList.add('active');
            this.loadArticle(articleId);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    updateNavActive(pageName) {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === pageName) {
                link.classList.add('active');
            }
        });
    }

    register(route, handler) {
        this.routes[route] = handler;
    }

    // 加载文章（从索引中查找）
    loadArticle = async function(articleId) {
        ui.showLoading('article-content');

        // 在索引中查找文章
        let articleData = null;

        // 搜索研究成果
        const researchItem = contentIndex.research.find(item => item.id === articleId);
        if (researchItem) {
            articleData = researchItem;
        }

        // 搜索新闻
        const newsItem = contentIndex.news.find(item => item.id === articleId);
        if (newsItem) {
            articleData = newsItem;
        }

        if (articleData) {
            try {
                let markdown = await contentLoader.loadMarkdown(articleData.file);
                const container = document.getElementById('article-content');

                // 处理图片路径 - 将相对路径转换为绝对路径
                // 获取文章所在的目录
                const fileDir = articleData.file.substring(0, articleData.file.lastIndexOf('/'));
                // 替换 markdown 中的图片路径
                markdown = markdown.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, src) => {
                    // 如果路径不是绝对路径（不以 / 或 http 开头），则添加 content 前缀
                    if (!src.startsWith('/') && !src.startsWith('http')) {
                        return `![${alt}](/content/${fileDir}/${src})`;
                    }
                    return match;
                });

                // 从 markdown 中提取标题（如果存在）
                let title = articleData.title;
                let date = articleData.date;

                // 检查 markdown 是否有标题
                const titleMatch = markdown.match(/^#\s+(.+)$/m);
                if (titleMatch) {
                    title = titleMatch[1];
                    // 如果标题在文件开头，将其移除以避免重复显示
                    if (titleMatch.index === 0 || /^\s*$/.test(markdown.substring(0, titleMatch.index))) {
                        markdown = markdown.replace(/^#\s+(.+)$/m, '').trim();
                    }
                }

                // 添加标题和元数据
                const articleWithMeta = `# ${title}

<div class="article-meta">
    <span class="article-date">📅 ${date}</span>
    ${articleData.category ? `<span class="article-category">🏷️ ${articleData.category}</span>` : ''}
</div>

---

${markdown}`;

                if (container && window.marked) {
                    container.innerHTML = window.marked.parse(articleWithMeta);
                    // 渲染数学公式
                    if (window.renderMathInElement) {
                        renderMathInElement(container, {
                            delimiters: [
                                {left: '$$', right: '$$', display: true},
                                {left: '$', right: '$', display: false},
                                {left: '\\[', right: '\\]', display: true},
                                {left: '\\(', right: '\\)', display: false}
                            ],
                            throwOnError: false
                        });
                    }
                }
            } catch (error) {
                console.error('Error loading article:', error);
                ui.renderMarkdown(`# 加载错误\n\n无法加载文章内容，请检查文件路径。`, 'article-content');
            }
        } else {
            ui.renderMarkdown(`# 文章未找到\n\n抱歉，找不到ID为 "${articleId}" 的文章。`, 'article-content');
        }

        // 设置返回链接
        const backLink = document.getElementById('article-back');
        if (backLink) {
            // 判断是研究成果还是新闻
            const isResearch = contentIndex.research.find(item => item.id === articleId);
            backLink.href = isResearch ? '#research' : '#news';
        }
    };
}

// ===================================
// 内容加载器
// ===================================
class ContentLoader {
    constructor() {
        this.contentCache = new Map();
    }

    async loadMarkdown(path) {
        // 检查缓存
        if (this.contentCache.has(path)) {
            return this.contentCache.get(path);
        }

        try {
            const response = await fetch(`content/${path}`);
            if (!response.ok) {
                throw new Error(`Failed to load ${path}`);
            }
            let markdown = await response.text();

            // 去除 YAML Front Matter (如果存在)
            // 匹配文件开头的 --- ... --- 块
            if (markdown.startsWith('---')) {
                markdown = markdown.replace(/^---[\s\S]*?---\s*/, '');
            }

            // 缓存内容
            this.contentCache.set(path, markdown);
            return markdown;
        } catch (error) {
            console.error('Error loading markdown:', error);
            return this.getErrorContent(path);
        }
    }

    getErrorContent(path) {
        return `# 内容未找到

抱歉，无法找到请求的内容文件：\`${path}\`

## 解决方法

请在 \`content/\` 目录下创建相应的 Markdown 文件。

---

**提示**：确保文件路径正确，并且文件存在于 content 目录中。
`;
    }

    clearCache() {
        this.contentCache.clear();
    }
}

// ===================================
// UI 控制器
// ===================================
class UIController {
    constructor(router, contentLoader) {
        this.router = router;
        this.contentLoader = contentLoader;
        this.init();
    }

    init() {
        this.setupMobileMenu();
        this.setupStatsAnimation();
    }

    setupMobileMenu() {
        const toggle = document.querySelector('.mobile-menu-toggle');
        const nav = document.querySelector('.main-nav');
        const overlay = document.getElementById('navOverlay');

        if (toggle && nav) {
            const toggleMenu = () => {
                toggle.classList.toggle('active');
                nav.classList.toggle('active');
                if (overlay) {
                    overlay.classList.toggle('active');
                }
                document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
            };

            toggle.addEventListener('click', toggleMenu);

            if (overlay) {
                overlay.addEventListener('click', toggleMenu);
            }

            // 点击导航链接后关闭菜单
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    toggle.classList.remove('active');
                    nav.classList.remove('active');
                    if (overlay) {
                        overlay.classList.remove('active');
                    }
                    document.body.style.overflow = '';
                });
            });

            // ESC键关闭菜单
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && nav.classList.contains('active')) {
                    toggleMenu();
                }
            });
        }
    }

    setupStatsAnimation() {
        const animateValue = (element, start, end, duration) => {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                const value = Math.floor(progress * (end - start) + start);
                element.textContent = value.toLocaleString();
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        };

        // 使用 Intersection Observer 触发动画
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const metricValues = entry.target.querySelectorAll('.metric-value');
                    metricValues.forEach(stat => {
                        const target = parseInt(stat.getAttribute('data-count'));
                        animateValue(stat, 0, target, 2000);
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        const metricsSection = document.querySelector('.impact-metrics');
        if (metricsSection) {
            observer.observe(metricsSection);
        }
    }

    showLoading(containerId) {
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = '<div class="loading"><div class="loading-spinner"></div></div>';
        }
    }

    renderMarkdown(markdown, containerId) {
        const container = document.getElementById(containerId);
        if (container && window.marked) {
            container.innerHTML = window.marked.parse(markdown);
            // 渲染数学公式
            if (window.renderMathInElement) {
                renderMathInElement(container, {
                    delimiters: [
                        {left: '$$', right: '$$', display: true},
                        {left: '$', right: '$', display: false},
                        {left: '\\[', right: '\\]', display: true},
                        {left: '\\(', right: '\\)', display: false}
                    ],
                    throwOnError: false
                });
            }
        }
    }
}

// ===================================
// 应用初始化
// ===================================
const router = new Router();
window.router = router;
const contentLoader = new ContentLoader();
const ui = new UIController(router, contentLoader);

// 注册页面路由

// 首页 - 加载新闻预览
router.register('home', () => {
    const container = document.getElementById('home-news-preview');
    if (!container) return;

    // 获取前3条新闻
    const items = contentIndex.news
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 3);

    container.innerHTML = items.map(item => `
        <div class="news-preview-card" onclick="router.navigate('article/${item.id}')" style="cursor: pointer;">
            <div class="news-card-content">
                <div class="news-date">📅 ${item.date}</div>
                <h3 class="news-title">${item.title}</h3>
                <p class="news-excerpt">${item.excerpt}</p>
                <div class="read-more">阅读全文 →</div>
            </div>
        </div>
    `).join('');
});

// 团队介绍
router.register('about', async () => {
    ui.showLoading('about-content');
    let markdown = await contentLoader.loadMarkdown('about.md');
    // 处理图片路径 - 将相对路径转换为绝对路径
    markdown = markdown.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, src) => {
        if (!src.startsWith('/') && !src.startsWith('http')) {
            return `![${alt}](/content/${src})`;
        }
        return match;
    });
    ui.renderMarkdown(markdown, 'about-content');
});

// 研究成果 - 自动从索引加载
router.register('research', () => {
    const container = document.getElementById('research-content');
    if (!container) return;

    // 从索引中获取研究成果列表
    const items = contentIndex.research;

    // 按日期排序（最新的在前）
    items.sort((a, b) => new Date(b.date) - new Date(a.date));

    container.innerHTML = items.map(item => `
        <div class="research-card" onclick="router.navigate('article/${item.id}')">
            <div class="research-card-image">${item.icon}</div>
            <div class="research-card-content">
                ${item.category ? `<span class="research-card-category">${item.category}</span>` : ''}
                <h3 class="research-card-title">${item.title}</h3>
                <p class="research-card-desc">${item.description}</p>
                <div class="research-card-meta">
                    <span>📅 ${item.date}</span>
                </div>
                <span class="research-card-link">
                    查看详情
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 3L11 8L6 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
            </div>
        </div>
    `).join('');
});

// 团队成员
router.register('team', () => {
    const container = document.getElementById('team-content');
    if (!container) return;

    const items = contentIndex.team;
    container.innerHTML = items.map(item => `
        <div class="team-card">
            <div class="team-card-avatar">${item.avatar}</div>
            <h3 class="team-card-name">${item.name}</h3>
            <p class="team-card-title">${item.title}</p>
            <p class="team-card-bio">${item.bio}</p>
            <div class="team-card-contact">
                <p>📧 ${item.email}</p>
                <p>🔬 ${item.research}</p>
            </div>
        </div>
    `).join('');
});

// 期刊论文
router.register('publications', () => {
    const container = document.getElementById('publications-content');
    if (!container) return;

    const items = contentIndex.publications;

    // 按年份排序（最新的在前）
    items.sort((a, b) => parseInt(b.year) - parseInt(a.year));

    container.innerHTML = items.map(item => `
        <div class="publication-item">
            <h3 class="publication-title">${item.title}</h3>
            <p class="publication-authors">${item.authors}</p>
            <div class="publication-meta">
                <span class="publication-venue">${item.venue}</span>
                ${item.volume ? `<span>${item.volume}</span>` : ''}
                <span class="publication-year">${item.year}</span>
            </div>
            <div class="publication-links">
                ${item.links.pdf && item.links.pdf !== '#' ? `<a href="${item.links.pdf}" class="publication-link" target="_blank">📄 PDF</a>` : ''}
                ${item.links.doi && item.links.doi !== '#' ? `<a href="${item.links.doi}" class="publication-link" target="_blank">🔗 DOI</a>` : ''}
            </div>
        </div>
    `).join('');
});

// 新闻资讯 - 自动从索引加载
router.register('news', () => {
    const container = document.getElementById('news-content');
    if (!container) return;

    // 从索引中获取新闻列表
    const items = contentIndex.news;

    // 按日期排序（最新的在前）
    items.sort((a, b) => new Date(b.date) - new Date(a.date));

    container.innerHTML = items.map(item => `
        <div class="news-card" onclick="router.navigate('article/${item.id}')">
            <div class="news-card-image">${item.icon}</div>
            <div class="news-card-content">
                ${item.category ? `<span class="news-card-category">${item.category}</span>` : ''}
                <div class="news-card-date">${item.date}</div>
                <h3 class="news-card-title">${item.title}</h3>
                <p class="news-card-excerpt">${item.excerpt}</p>
            </div>
        </div>
    `).join('');
});

// 联系我们
router.register('contact', async () => {
    ui.showLoading('contact-content');
    let markdown = await contentLoader.loadMarkdown('contact.md');
    // 处理图片路径 - 将相对路径转换为绝对路径
    markdown = markdown.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, src) => {
        if (!src.startsWith('/') && !src.startsWith('http')) {
            return `![${alt}](/content/${src})`;
        }
        return match;
    });
    ui.renderMarkdown(markdown, 'contact-content');
});

// 初始化路由
window.addEventListener('load', () => {
    router.handleRoute();
    SearchController.init();
});

console.log('电力数据智能分析与可视化团队已启动 🚀');
console.log('提示：研究成果和新闻资讯自动从 content/index.js 加载');

// ===================================
// 搜索功能控制器
// ===================================
class SearchController {
    constructor() {
        this.searchModal = null;
        this.searchInput = null;
        this.searchResults = null;
        this.searchToggle = null;
        this.searchClose = null;
        this.searchOverlay = null;
        this.debounceTimer = null;
    }

    static init() {
        const controller = new SearchController();
        controller.setupElements();
        controller.setupEventListeners();
        return controller;
    }

    setupElements() {
        this.searchModal = document.getElementById('searchModal');
        this.searchInput = document.getElementById('searchInput');
        this.searchResults = document.getElementById('searchResults');
        this.searchToggle = document.getElementById('searchToggle');
        this.searchClose = document.getElementById('searchClose');
        this.searchOverlay = document.getElementById('searchOverlay');
    }

    setupEventListeners() {
        if (!this.searchToggle) return;

        this.searchToggle.addEventListener('click', () => this.open());
        this.searchClose.addEventListener('click', () => this.close());
        this.searchOverlay.addEventListener('click', () => this.close());

        this.searchInput.addEventListener('input', (e) => {
            clearTimeout(this.debounceTimer);
            this.debounceTimer = setTimeout(() => {
                this.search(e.target.value);
            }, 300);
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === '/' && !this.searchModal.classList.contains('active')) {
                const activeElement = document.activeElement;
                if (activeElement.tagName !== 'INPUT' && activeElement.tagName !== 'TEXTAREA') {
                    e.preventDefault();
                    this.open();
                }
            } else if (e.key === 'Escape' && this.searchModal.classList.contains('active')) {
                this.close();
            }
        });
    }

    open() {
        this.searchModal.classList.add('active');
        this.searchInput.focus();
        this.searchInput.value = '';
        this.searchResults.innerHTML = '';
        document.body.style.overflow = 'hidden';
    }

    close() {
        this.searchModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    search(query) {
        if (!query.trim()) {
            this.searchResults.innerHTML = '';
            return;
        }

        const results = this.performSearch(query.toLowerCase());
        this.renderResults(results, query);
    }

    performSearch(query) {
        const results = [];

        for (const type of ['research', 'news']) {
            for (const item of contentIndex[type]) {
                const title = item.title.toLowerCase();
                const desc = (item.description || item.excerpt || '').toLowerCase();
                const category = (item.category || '').toLowerCase();

                if (title.includes(query) || desc.includes(query) || category.includes(query)) {
                    results.push({
                        ...item,
                        type: type,
                        score: this.calculateScore(title, desc, category, query)
                    });
                }
            }
        }

        return results.sort((a, b) => b.score - a.score);
    }

    calculateScore(title, desc, category, query) {
        let score = 0;
        if (title.includes(query)) score += 10;
        if (title.startsWith(query)) score += 5;
        if (desc.includes(query)) score += 3;
        if (category.includes(query)) score += 2;
        return score;
    }

    renderResults(results, query) {
        if (results.length === 0) {
            this.searchResults.innerHTML = `
                <div class="search-no-results">
                    <div class="search-no-results-icon">🔍</div>
                    <p>未找到与"${query}"相关的内容</p>
                </div>
            `;
            return;
        }

        this.searchResults.innerHTML = results.map(item => {
            const typeLabel = item.type === 'research' ? '研究成果' : '新闻资讯';
            const date = item.date || '';
            return `
                <div class="search-result-item" onclick="SearchController.navigate('${item.type}', '${item.id}')">
                    <div class="search-result-icon">${item.icon || '📄'}</div>
                    <div class="search-result-content">
                        <span class="search-result-type">${typeLabel}</span>
                        <div class="search-result-title">${this.highlightText(item.title, query)}</div>
                        <div class="search-result-desc">${this.highlightText(item.description || item.excerpt || '', query)}</div>
                        ${date ? `
                            <div class="search-result-meta">
                                <span class="search-result-date">📅 ${date}</span>
                            </div>
                        ` : ''}
                    </div>
                </div>
            `;
        }).join('');
    }

    highlightText(text, query) {
        if (!text) return '';
        const regex = new RegExp(`(${this.escapeRegex(query)})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    }

    escapeRegex(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    static navigate(type, id) {
        const router = window.router;
        
        if (type === 'research') {
            router.navigate(`article/${id}`);
        } else if (type === 'news') {
            router.navigate(`article/${id}`);
        }
        
        const searchModal = document.getElementById('searchModal');
        if (searchModal) {
            searchModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
}
