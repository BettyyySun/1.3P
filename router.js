const IntroductionComponent = {
    template: `
        <div>
            <h2>Introduction</h2>
            <p>{{ introduction }}</p>
        </div>
    `,
    data() {
        return {
            introduction: "My name is Enjia Sun. Also, you can call me Betty! First of all, after I graduated from VCE, I was somewhat interested in IT as a profession through online information in Deakin University. Then, the major I want to study is cyber security in Deakin University. Because today's era with the rapid progress of the network, I think the cyber security development prospects will be broader. I think my interest in IT stems from occasionally seeing a bank's cybersecurity guy fixing vulnerabilities to keep people's personal information safe. Finally, I hope that in the future I can be like them and protect people's personal privacy from being leaked online."
        };
    }
};

const SkillsComponent = {
    template: `
        <div>
            <h2>My Skills</h2>
            <ul>
                <li v-for="skill in skills">{{ skill }}</li>
            </ul>
        </div>
    `,
    data() {
        return {
            skills: [
                "Adaptability",
                "Attention to detail",
                "Time management",
                "Working under pressure",
                "Written Communication"
            ]
        };
    }
};

const FutureSkillsComponent = {
    template: `
        <div>
            <h2>Skills Required in My Future Career</h2>
            <ul>
                <li v-for="futureSkill in futureSkills">{{ futureSkill }}</li>
            </ul>
        </div>
    `,
    data() {
        return {
            futureSkills: [
                "Customer service",
                "Teamwork",
                "Communication",
                "Time management",
                "Investigating"
            ]
        };
    }
};

const ContactForm = {
    template: `
        <div>
            <h2>Contact Me</h2>
            <form @submit.prevent="submitForm">
                <input v-model="name" type="text" placeholder="Your Name" required>
                <input v-model="email" type="email" placeholder="Your Email" required>
                <textarea v-model="message" placeholder="Your Message" rows="5" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    `,
    data() {
        return {
            name: '',
            email: '',
            message: ''
        };
    },
    methods: {
        submitForm() {
            console.log("Form submitted with data:", this.name, this.email, this.message);
            alert('Thank you for your contact! I will get back to you as soon as possible.');
            this.name = this.email = this.message = '';  
        }
    }
};

const routes = [
  { path: '/', component: IntroductionComponent },
  { path: '/skills', component: SkillsComponent },
  { path: '/future-skills', component: FutureSkillsComponent },
  { path: '/contact', component: ContactForm }
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
});

export default router;
