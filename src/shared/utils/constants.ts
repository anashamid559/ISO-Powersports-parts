import { Images } from "../../assets";
import { ChatData, SelectedKey } from "../types";



const chatData: ChatData[] = [
    {
        id: 1,
        imageSrc: Images.Roost,
        descriptionTitle: "In Search Of F2 Roost Deflector",
        descriptionText: "Can you send the photo?",
        date: "Today",
        count: "12",
    },
    {
        id: 2,
        imageSrc: Images.Roost,
        descriptionTitle: "DUCATI MOTORS 800",
        descriptionText: "Can you send the photo?",
        date: "Yesterday",
        count: null,
    },
    {
        id: 3,
        imageSrc: Images.Roost,
        descriptionTitle: "In Search of Honda TRX 250 Quad",
        descriptionText: "Can you send the photo?",
        date: "Saturday",
        count: null,
    },
    {
        id: 4,
        imageSrc: Images.Roost,
        descriptionTitle: "2017 Yamaha XYZ 1000R",
        descriptionText: "Can you send the photo?",
        date: "30/10/2022",
        count: null,
    },
    {
        id: 5,
        imageSrc: Images.Roost,
        descriptionTitle: "In Search Of F2 Roost Deflector",
        descriptionText: "Can you send the photo?",
        date: "30/10/2022",
        count: null,
    },
    {
        id: 6,
        imageSrc: Images.Roost,
        descriptionTitle: "In Search Of F2 Roost Deflector",
        descriptionText: "Can you send the photo?",
        date: "30/10/2022",
        count: null,
    },
    {
        id: 7,
        imageSrc: Images.Roost,
        descriptionTitle: "In Search Of F2 Roost Deflector",
        descriptionText: "Can you send the photo?",
        date: "30/10/2022",
        count: null,
    },
    {
        id: 8,
        imageSrc: Images.Roost,
        descriptionTitle: "In Search Of F2 Roost Deflector",
        descriptionText: "Can you send the photo?",
        date: "30/10/2022",
        count: null,
    },
    {
        id: 9,
        imageSrc: Images.Roost,
        descriptionTitle: "In Search Of F2 Roost Deflector",
        descriptionText: "Can you send the photo?",
        date: "30/10/2022",
        count: null,
    },
];


const getRedLinePosition = (selected: SelectedKey) => {
    switch (selected) {
        case 'all':
            return { left: '0%', width: '28%' };
        case 'buying':
            return { left: '25%', width: '40%' };
        case 'selling':
            return { left: '65%', width: '35%' };
        default:
            return { left: '0%', width: '32%' };
    }
};

const linksData = [
    {
        heading: 'ABOUT',
        links: [
            { text: 'About the Company', to: '/about' },
            { text: 'How it Works', to: '/how-it-works' },
            { text: 'Getting Paid', to: '/getting-paid' },
            { text: 'Shipping & Local Pickup', to: '/shipping-local-pickup' },
            { text: 'Fee Policy', to: '/fee-policy' },
        ],
    },
    {
        heading: 'For Sale Listings',
        links: [
            { text: 'About the Company', to: '/about' },
            { text: 'How it Works', to: '/how-it-works' },
            { text: 'Getting Paid', to: '/getting-paid' },
            { text: 'Shipping & Local Pickup', to: '/shipping-local-pickup' },
            { text: 'Fee Policy', to: '/fee-policy' },
        ],
    },
    {
        heading: 'In Search Of Listings',
        links: [
            { text: 'About the Company', to: '/about' },
            { text: 'How it Works', to: '/how-it-works' },
            { text: 'Getting Paid', to: '/getting-paid' },
            { text: 'Shipping & Local Pickup', to: '/shipping-local-pickup' },
            { text: 'Fee Policy', to: '/fee-policy' },
        ],
    },
    {
        heading: 'Legal',
        links: [
            { text: 'About the Company', to: '/about' },
            { text: 'How it Works', to: '/how-it-works' },
            { text: 'Getting Paid', to: '/getting-paid' },
            { text: 'Shipping & Local Pickup', to: '/shipping-local-pickup' },
            { text: 'Fee Policy', to: '/fee-policy' },
        ],
    },
    {
        heading: 'Resources',
        links: [
            { text: 'About the Company', to: '/about' },
            { text: 'How it Works', to: '/how-it-works' },
            { text: 'Getting Paid', to: '/getting-paid' },
            { text: 'Shipping & Local Pickup', to: '/shipping-local-pickup' },
            { text: 'Fee Policy', to: '/fee-policy' },
        ],
    },
];

const footerLinks = [
    { text: 'Privacy Policy', to: '/' },
    { text: 'Terms & Conditions', to: '/' },
    { text: 'Refund Policy', to: '/' },
    { text: 'Accessibility', to: '/' },
];




export { chatData, getRedLinePosition, linksData,footerLinks }