import { CiLinkedin } from 'react-icons/ci';
import { FiGithub } from 'react-icons/fi';
import { TbBrandGmail } from 'react-icons/tb';
import { FaXTwitter } from 'react-icons/fa6';
import { LuBatteryLow, LuBellRing, LuBrain, LuChartLine, LuCircleCheck, LuCircleX, LuRepeat, LuSlidersHorizontal, LuSparkles, LuTimer, LuTrendingUp } from 'react-icons/lu';

export const navLinks = [
    { name: 'Home', href: '/#' },
    { name: 'Problem', href: '/#problem' },
    { name: 'System', href: '/#system' },
    { name: 'Results', href: '/#results' },
];

export const problemData = [
    {
        icon: <LuRepeat className="w-6 h-6" />,
        title: 'Constant Context Switching',
        desc: 'Jumping between Slack, code, emails and meetings fragments your cognitive bandwidth and destroys deep work.'
    },
    {
        icon: <LuBatteryLow className="w-6 h-6" />,
        title: 'Energy-Blind Planning',
        desc: 'You schedule tasks based on deadlines — not on when your LuBrain performs at its best.'
    },
    {
        icon: <LuBellRing className="w-6 h-6" />,
        title: 'Notification Noise',
        desc: 'Every ping steals attention. Even if you don’t respond, your LuBrain pays the cost.'
    }
];


export const toolsData = [
    {
        id: 'tradititonal',
        name: 'Tradititonal Tools',
        rows:[{icon:<LuCircleX className="w-6 h-6 text-red-600"/>, content:"Task lists grow endlessly."},{icon:<LuCircleX className="w-6 h-6 text-red-600"/>, content:"Priorities are based on urgency."},
            {icon:<LuCircleX className="w-6 h-6 text-red-600"/>, content:"Measure output volume."},{icon:<LuCircleX className="w-6 h-6 text-red-600"/>, content:"Ignore burnout signals."}
        ]
    },
    {
        id: 'focusFlow',
        name: 'FocusFlow Approach',
        rows:[{icon:<LuCircleCheck className="w-6 h-6 text-green-600"/>, content:"Tasks adapt to your cognitive capacity."},{icon:<LuCircleCheck className="w-6 h-6 text-green-600"/>, content:"Priorities are based on mental energy."},
            {icon:<LuCircleCheck className="w-6 h-6 text-green-600"/>, content:"Measure cognitive quality."},{icon:<LuCircleCheck className="w-6 h-6 text-green-600"/>, content:"Detect mental fatigue patterns."}
        ]
    }
]

export const systemData = [
    {
        title:"Detect",
        icon:<LuBrain className="w-6 h-6"/>,
        description:"Detect Understand your cognitive patterns and daily energy rhythms through passive monitoring."
    },
    {
        title:"Align",
        icon:<LuSlidersHorizontal className="w-6 h-6"/>,
        description:"Match tasks to mental capacity. High-energy work when sharp. Low-effort tasks when drained."
    },
    {
        title:"Execute",
        icon:<LuTimer className="w-6 h-6"/>,
        description:"Structured deep work cycles. Guided focus sessions reduce context switching and interruptions."
    },
    {
        title:"Optimize",
        icon:<LuChartLine className="w-6 h-6"/>,
        description:"Continuous cognitive refinement. Insights improve planning and reduce burnout over time."
    },
]

export const socialProofData = [
    {
        name:"Daniel R.",
        job: "Senior Frontend Engineer",
        img:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
        content: "FocusFlow completely changed how I schedule my cognitive-heavy tasks. I ship more with less stress.",
    },
    {
        name:"Maya Patel",
        job: "Product Designer",
        img:"https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
        content: "I stopped organizing tasks by urgency and started organizing by energy. That shift alone doubled my creative output.",
    },
    {
        name:"Liam Brooks",
        job: "Senior Growth Engineer",
        img:"https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
        content: "This isn’t another productivity app. It feels like a performance system for founders who need to stay sharp",
    },
];

export const resultData = [
    {   
        icon:<LuCircleCheck className="w-6 h-6"/>,
        text: 'Fewer unfinished tasks',
    },
    {   
        icon:<LuSparkles className="w-6 h-6"/>,
        text: 'Longer deep work sessions',
    },
    {   
        icon:<LuTrendingUp className="w-6 h-6"/>,
        text: 'Reduced cognitive fatigue',
    },
    {   
        icon:<LuBrain className="w-6 h-6"/>,
        text: 'Clearer daily priorities',
    },
    {   
        text: '“I no longer end my day mentally exhausted. I end it accomplished.”',
    },

]

export const footerLinks = [
    {
        title: "Company",
        links: [
            { name: "Terms of Service", label:"Go to Terms of Service", icon:"", url: "/" },
            { name: "Privacy Policy", label:"Go to Privacy Policy", icon:"", url: "/" },
            { name: "Security", icon:"", label:"Go to Security", url: "/" },
            { name: "Sitemap", icon:"", label:"Go to Sitemape", url: "/" }
        ]
    },
    {
        title: "Social",
        links: [
            { name:"", icon: <CiLinkedin className="w-6 h-6"/>, label:"Go to Linkedin", url: "/" },
            { name:"", icon: <TbBrandGmail className="w-6 h-6"/>, label:"Go to Gmail", url: "/" },
            { name:"", icon: <FiGithub className="w-6 h-6"/>, label:"Go to Github", url: "/" },
            { name:"", icon: <FaXTwitter className="w-6 h-6"/>, label:"Go to X", url: "/" }
        ]
    },
];