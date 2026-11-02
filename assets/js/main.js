/**
 * Main Interactive Script for Pham Mai Linh's Editorial Portfolio
 * Brand: Fraunces & Sora
 */

// Structured Data for the 5 Verified Projects
const projectData = {
    portfolio: {
        title: "Portfolio Construction & Risk–Return Analysis",
        category: "Investment Analysis",
        tools: ["Microsoft Excel", "Markowitz Optimization", "CAPM"],
        badge: "Primary Featured Project",
        overview: "A quantitative investment study evaluating a multi-asset equity universe composed of six major Vietnamese blue-chip stocks (MWG, HPG, FPT, TCB, VIC, MBB) benchmarked against the VN-Index.",
        sections: [
            {
                heading: "Universe & Asset Selection",
                content: "Selected 6 diversified equities representing retail (MWG), basic materials (HPG), technology (FPT), financial services (TCB, MBB), and real estate/conglomerate (VIC), alongside the VN-Index benchmark to assess systemic vs. unsystematic risks."
            },
            {
                heading: "Quantitative Methodology",
                content: "Calculated historical daily/monthly returns, annualized standard deviation (volatility), asset covariances, and correlation coefficients. Estimated asset Betas via regression against the VN-Index to derive expected equilibrium returns using the Capital Asset Pricing Model (CAPM)."
            },
            {
                heading: "Portfolio Optimization & The Efficient Frontier",
                content: "Constructed the variance-covariance matrix in Excel to calculate the Minimum-Variance Portfolio and the Maximum-Sharpe (Tangency) Portfolio. Derived the Capital Allocation Line (CAL) by introducing a risk-free rate, establishing optimal capital allocation between the risk-free asset and the risky tangency portfolio."
            },
            {
                heading: "Investment Decision Implications",
                content: "Demonstrated the mathematical benefit of diversification across non-perfectly correlated assets, illustrating how specific weight adjustments enhance risk-adjusted performance over individual holding strategies."
            }
        ],
        metrics: [
            { label: "Assets Analyzed", value: "MWG, HPG, FPT, TCB, VIC, MBB" },
            { label: "Benchmark", value: "VN-Index" },
            { label: "Core Model", value: "Markowitz Mean-Variance & CAPM" },
            { label: "Key Output", value: "Min-Variance & Max-Sharpe CAL" }
        ]
    },
    telemarketing: {
        title: "Bank Telemarketing Campaign Analysis",
        category: "Business Analytics & Banking",
        tools: ["Power BI", "Microsoft Excel", "Business Analytics"],
        badge: "Banking Case Study",
        overview: "An in-depth empirical investigation of a Portuguese commercial bank's direct telemarketing campaigns for long-term deposit subscriptions.",
        sections: [
            {
                heading: "Problem Statement",
                content: "Evaluated conversion performance across marketing contact waves to identify friction points and optimize client targeting efficiency for retail term-deposit acquisition."
            },
            {
                heading: "Macroeconomic Driver Analysis",
                content: "Identified strong inverse and direct correlations between customer subscription propensity and macroeconomic climate indicators, specifically the Euribor 3-Month rate (Euribor3M) and prevailing unemployment rate dynamics."
            },
            {
                heading: "Customer Segmentation & Profiling",
                content: "Segmented the customer base across age, job classification, education, credit default status, and previous campaign engagement to construct high-probability customer persona clusters."
            },
            {
                heading: "What-If Sensitivity & Recommendations",
                content: "Formulated data-backed marketing strategies and call-scheduling recommendations, demonstrating how targeted prioritization reduces outbound operational fatigue while improving deposit conversion rates."
            }
        ],
        metrics: [
            { label: "Domain", value: "Commercial Retail Banking" },
            { label: "Macro Factors", value: "Euribor 3M & Unemployment" },
            { label: "Dashboard", value: "Interactive Power BI" },
            { label: "Focus", value: "Term-Deposit Conversion" }
        ]
    },
    corporate: {
        title: "Corporate Financial & Equity Analysis",
        category: "Corporate Finance & Financial Analysis",
        tools: ["Microsoft Excel", "Financial Statement Analysis"],
        badge: "Financial Analysis",
        overview: "Rigorous diagnostic evaluation of financial health, operating efficiency, capital structure, and business drivers of listed companies, focusing on FPT and Mobile World Group (MWG).",
        sections: [
            {
                heading: "Financial Statement Diagnostics",
                content: "Restructured Balance Sheet, Income Statement, and Cash Flow Statement figures across multiple reporting fiscal years to identify structural shifts in working capital and leverage."
            },
            {
                heading: "DuPont Decomposition & Profitability Ratios",
                content: "Applied three-stage and five-stage DuPont analysis to isolate Return on Equity (ROE) drivers—disentangling net profit margin, asset turnover, and financial leverage ratios."
            },
            {
                heading: "Operating Drivers: FPT & MWG",
                content: "Analyzed operational resilience: FPT's recurring software export and telecom cash flows versus MWG's retail inventory turnover, store expansion pacing, and margin sensitivity."
            },
            {
                heading: "Synthesized Analytical Findings",
                content: "Synthesized financial health metrics to provide a factual, evidence-based assessment of business profitability without unverified valuation assumptions."
            }
        ],
        metrics: [
            { label: "Companies Examined", value: "FPT Corporation & MWG" },
            { label: "Framework", value: "DuPont & Financial Ratios" },
            { label: "Statements", value: "BS, IS, CFS Multi-Year" },
            { label: "Analytical Basis", value: "Verified Reported Financials" }
        ]
    },
    energy: {
        title: "Household Energy Consumption Prediction",
        category: "Data Analytics & Predictive Modeling",
        tools: ["Python", "Pandas & Scikit-Learn", "Machine Learning"],
        badge: "Predictive Analytics",
        overview: "A quantitative predictive modeling initiative forecasting residential power demand using statistical regression and machine learning algorithms.",
        sections: [
            {
                heading: "Exploratory Data Analysis (EDA)",
                content: "Analyzed multi-variable time-series energy consumption data, identifying seasonal usage trends, diurnal load cycles, temperature sensitivity, and peak-hour load anomalies."
            },
            {
                heading: "Feature Engineering & Preprocessing",
                content: "Engineered temporal lag variables, rolling window statistics, and ambient temperature interaction terms; handled missing data and normalized numerical features."
            },
            {
                heading: "Predictive Modeling Architecture",
                content: "Trained and benchmarked baseline multiple linear regression models alongside non-linear Random Forest regressors to capture complex non-linear consumption patterns."
            },
            {
                heading: "Evaluation & Business Implications",
                content: "Assessed model generalizability using R-squared ($R^2$) and Root Mean Squared Error (RMSE) metrics. Evaluated business implications for utility grid load balancing and peak-pricing advisory."
            }
        ],
        metrics: [
            { label: "Core Algorithms", value: "Regression & Random Forest" },
            { label: "Language", value: "Python (NumPy, Pandas, Scikit-learn)" },
            { label: "Evaluation", value: "RMSE & R² Performance Metrics" },
            { label: "Use Case", value: "Peak Load Forecasting" }
        ]
    },
    research_edu: {
        title: "Integrating Artificial Intelligence into Finance and Accounting Education: Lessons from Global Universities",
        category: "Academic Research",
        tools: ["Comparative Research", "Curriculum Analysis", "Academic Writing"],
        badge: "ACBSP Conference 2026",
        overview: "An academic research study analyzing how leading global universities integrate generative AI and algorithmic automation into finance and accounting curricula, deriving policy implications for Vietnamese higher education.",
        sections: [
            {
                heading: "Research Background & Purpose",
                content: "The rapid institutional adoption of generative AI and automated financial modeling necessitates structural reform in business school pedagogy to prepare future financial analysts and accountants."
            },
            {
                heading: "Comparative Methodology (7 Global Institutions)",
                content: "Conducted a structured comparative curriculum analysis across seven international universities spanning North America, Europe, and Asia, categorizing AI integration across course modules, toolkits, and assessment methods."
            },
            {
                heading: "Core Findings & Integration Frameworks",
                content: "Identified three primary integration paradigms: (1) AI-assisted technical analytics (Python/NLP for financial data), (2) Ethical & governance oversight in accounting, and (3) Human-in-the-loop decision synthesis."
            },
            {
                heading: "Implications for Vietnam & Conference Record",
                content: "Formulated practical recommendations for Vietnamese university programs (such as FTU) to embed analytical AI literacy. Research selected and presented at the ACBSP Region 10 Annual Conference 2026."
            }
        ],
        metrics: [
            { label: "Scope", value: "7 International Universities" },
            { label: "Domains", value: "Finance & Accounting Education" },
            { label: "Presentation", value: "ACBSP Region 10 Annual Conference 2026" },
            { label: "Focus", value: "Curriculum & Policy Frameworks" }
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide Icons
    if (window.lucide) {
        lucide.createIcons();
    }

    // 2. Set Current Year in Footer
    const currentYearEl = document.getElementById('currentYear');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }

    // 3. Theme Management (Light as default brand, with Dark mode)
    initTheme();

    // 4. Mobile Menu Navigation
    initMobileMenu();

    // 5. ScrollSpy for Active Links
    initScrollSpy();

    // 6. Project Modal Listeners
    initProjectModal();
});

/* ==========================================================================
   Theme Management (Persists to localStorage)
   ========================================================================== */
function initTheme() {
    const themeToggleBtn = document.getElementById('themeToggle');
    const storedTheme = localStorage.getItem('theme');

    // Default to clean light mode as the pristine Fraunces & Sora editorial showcase,
    // or restore user preference
    if (storedTheme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            const isDark = document.documentElement.classList.contains('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            if (window.lucide) {
                lucide.createIcons();
            }
        });
    }
}

/* ==========================================================================
   Mobile Navigation Drawer
   ========================================================================== */
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
}

/* ==========================================================================
   Active Navigation Link on Scroll (ScrollSpy)
   ========================================================================== */
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.pageYOffset + 120;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }, { passive: true });
}

/* ==========================================================================
   Project Detail Modal System
   ========================================================================== */
function initProjectModal() {
    const modal = document.getElementById('projectModal');
    if (!modal) return;

    // Close on backdrop click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeProjectModal();
        }
    });

    // Close on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeProjectModal();
            closeCvModal();
        }
    });
}

window.openProjectModal = function(projectId) {
    const data = projectData[projectId];
    if (!data) return;

    const modal = document.getElementById('projectModal');
    const categoryEl = document.getElementById('modalProjectCategory');
    const titleEl = document.getElementById('modalProjectTitle');
    const overviewEl = document.getElementById('modalProjectOverview');
    const toolsEl = document.getElementById('modalProjectTools');
    const metricsEl = document.getElementById('modalProjectMetrics');
    const bodyEl = document.getElementById('modalProjectBody');

    if (categoryEl) categoryEl.textContent = data.category + (data.badge ? ` • ${data.badge}` : '');
    if (titleEl) titleEl.textContent = data.title;
    if (overviewEl) overviewEl.textContent = data.overview;

    // Render tools tags
    if (toolsEl) {
        toolsEl.innerHTML = data.tools.map(tool => 
            `<span class="px-2.5 py-1 text-xs rounded border border-[#E8E0E2] dark:border-[#4A1220] bg-[#F8F6F6] dark:bg-[#22060D] text-[#880034] dark:text-[#FF75A0] font-medium">${tool}</span>`
        ).join('');
    }

    // Render Key Metrics
    if (metricsEl) {
        metricsEl.innerHTML = data.metrics.map(m => 
            `<div class="p-3 rounded border border-[#E8E0E2] dark:border-[#4A1220] bg-white dark:bg-[#1B0309]">
                <div class="text-[11px] font-semibold tracking-wider uppercase text-slate-500 dark:text-slate-400 mb-1">${m.label}</div>
                <div class="text-xs font-bold text-[#44000E] dark:text-[#FDF2F4]">${m.value}</div>
            </div>`
        ).join('');
    }

    // Render Body Sections
    if (bodyEl) {
        bodyEl.innerHTML = data.sections.map(s => 
            `<div class="space-y-1.5 pb-4 border-b border-[#E8E0E2] dark:border-[#4A1220] last:border-0 last:pb-0">
                <h4 class="font-serif text-base font-bold text-[#44000E] dark:text-[#FDF2F4]">${s.heading}</h4>
                <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">${s.content}</p>
            </div>`
        ).join('');
    }

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';

    if (window.lucide) {
        lucide.createIcons();
    }
};

window.closeProjectModal = function() {
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = '';
    }
};

/* ==========================================================================
   CV Modal Control
   ========================================================================== */
window.openCvModal = function() {
    const modal = document.getElementById('cvModal');
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden';
    }
};

window.closeCvModal = function() {
    const modal = document.getElementById('cvModal');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = '';
    }
};

window.simulateCvDownload = function() {
    showToast('Document request noted. Preparing CV file.');
    closeCvModal();
};

/* ==========================================================================
   Copy Email To Clipboard with Toast Notification
   ========================================================================== */
window.copyEmail = function() {
    const email = document.getElementById('emailText').textContent.trim();
    navigator.clipboard.writeText(email).then(() => {
        const copyBtnText = document.getElementById('copyBtnText');
        if (copyBtnText) copyBtnText.textContent = 'Copied';
        showToast('Email address copied to clipboard');

        setTimeout(() => {
            if (copyBtnText) copyBtnText.textContent = 'Copy';
        }, 2500);
    }).catch(err => {
        showToast('Please copy: ' + email);
    });
};

/* ==========================================================================
   Toast Notification Helper
   ========================================================================== */
function showToast(message) {
    const toast = document.getElementById('toastNotification');
    const toastMsg = document.getElementById('toastMessage');
    if (!toast || !toastMsg) return;

    toastMsg.textContent = message;
    toast.classList.remove('hidden');
    toast.classList.add('flex');

    setTimeout(() => {
        toast.classList.add('hidden');
        toast.classList.remove('flex');
    }, 3200);
}

/* ==========================================================================
   Contact Form Handling
   ========================================================================== */
window.handleContactSubmit = function(event) {
    event.preventDefault();
    showToast('Thank you! Your message has been recorded.');
    event.target.reset();
};
