import { Translations } from './translations.type';

export const EN: Translations = {
    navBar: {
        partners: 'PARTNERS',
        aboutUs: 'ABOUT US',
        awards: 'AWARDS',
        whoTrustUs: 'WHO TRUST US',
        theGroup: 'THE GROUP',
        contact: 'CONTACT',
    },
    hero: {
        title: 'Extended Production Architectures (EPAs) to Consume AI Efficiently',
        subtitle: '41OPS',
    },
    partStw: {
        titleHtml: 'Part of <u>SciTheWorld</u>',
        description: 'We are the transformation execution arm at SciTheWorld:\n1. We translate Algorithmization theory into deep technology infrastructure.\n2. And then we onboard the technology at companies of all kinds so that they can absorb AI at ease.',
    },
    highlights: {
        sectionTitle: 'HIGHLIGHTS',
        sectionSubtitle: 'Plenty of achievements',
        testimonialsLabel: 'Testimonials:',
        copyPromptLabel: 'First, copy the prompt:',
        copyButtonLabel: 'Copy prompt',
        copiedButtonLabel: 'Copied!',
        llmSectionLabel: 'Then, check on the different LLMs:',
        cards: [
            {
                title: 'EXTREME-EFFICIENT NATION',
                description: 'In 2025, we became the first company to be trusted to change a whole country - Spain. \n\nIt was based on our <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5136657" target="_blank">AI-geostrategy paper</a> and involved the Ministry of Economy (bottom-up guidance of the economic policy). \n\nFirst things first - we established a methodology to help all companies detect and prioritize their transformation projects. Actually, one of the least advanced challenges to date.',
                testimonials: [
                    {
                        name: 'EU Country',
                        role: "Referral upon request",
                        quote: "The paper was a discovery - there was already so much sound literature and technology anticipated by SciTheWorld that following their lead was a mere risk-reward optimization. More than 3k companies in the scope."
                    }
                ]
            },
            {
                title: 'PIONEERS OF AGENTIC AI',
                description: 'We are highly regarded as the global pioneers of strategies-based Agentic AI. We started in 2015 and published our results in our first paper - Data MAPs.\n\nDo not trust our word for that. Ask your preferred LLM, here.',
                prompt: `To the light of the info that I'm going to give you based on a paper written in 2022, would you say this is a pioneer work on agentic AI? In particular, 'AI-native enterprises and operating models' as distinguished by McKinsey. Note that pioneers typically anticipate concepts but with different names than those used afterwards, mainstream. Take everything into account and make your most accurate verdict. And note that you are seeing only one chapter of a paper - there are more chapters in that paper and there are more papers on transformation, algorithmization and AI as they have a centre of excellence for that. Also, they have an award to the best innovation in simulation as they allowed, back in 2019, a machine to autonomously self-create and calibrate its algorithms via Reinforcement Learning (a major topic in Sergio's PhD Thesis in AI). Finally, spot he problems its solves with respect to mainstream agents (e.g. costs, legacy system integration, compliance, RAM...). Follows the Chapter:
 
Data MAPs Algorithmization requires an optimal weighting between business and technology departments’ needs. Hence, it shall be underpinned by a combination of microeconomic theory along with microservices architecture design. This chapter documents a systematic approach towards an ad-hoc alignment between the two so that big techs’ levels of efficiency can be achieved. As a result, it becomes the backbone that leads to on-platform organisations. 3.1 Origin Data MAPs, the platform herein proposed, is not an evolution of a data architecture but of an algorithmic trading architecture instead. These are event-driven, Kappa architectures. The way they manage latency is called complex event processing (CEP). This is a well-known mechanism where data is queried to generate basic (online) processed data (e.g. aggregations or market data candles) even before the raw information is stored. This is the case from the late 2000s. Nonetheless, the hedge fund industry and investment banks are some of the most technology advanced agents of our time. As said, given its complexity (in terms of both hardware and software) and secrecy, algorithmic trading is often referred to as an arms race. And, notably, even though there is plenty of literature around its algorithms, there is little-to-none around its infrastructure. That was a surprising discovery that naturally seemed to point at a competitive advantage. Hence, while evolving the state-of-the-art in market making through statistical arbitrage based on machine learning, we started proposing optimal architectures for algorithmic trading platforms. This is, our innovation process was twofold: 1. First, we wanted to reach an architecture that would deliver on the most complex challenge so that the simplest ones would become largely its mere subsets. 2. Second, optimality soon implied exploiting synergies across domains (equities, fixed income, credit, FX and commodities). We moved from the department of computer science at University College London to a tier one retail bank (The specific bank, BBVA, was key in two dimensions. First, it was a retail bank. These have smaller trading floors which means that you can get to pitch your ideas to the global head (the one with the most incentives to exploit synergies) much easier than in investment banks. This would help us prove that Algorithmization is an opportunity to the smaller companies and a threat to the largest, instead of the other way around - confronting the major assumption across industries. Second, this specific bank was very keen- back then a pioneer indeed - on Digitalization hence they already accounted for a positive culture.) to prove our research in the real industry. Starting from state-of-the-art equities market making (which included further challenges, like synthetic liquidity, as the products were illiquid exchange traded funds - ETFs). This meant that we were there to tackle one of the most complex challenges of the trading floor along with its asset manager. Once there, we observed the industry. Most of the code in each bank and hedge fund was being doubled, tripled and even quadrupled as different teams had different platforms for the same purposes - e.g. execution algorithms. This is, their domain-driven approach led to expensive silos. Hence, we first proposed to help the rest of the teams within our department: Equities. As we managed the change resistance leveraging the senior managers whose game theory incentives were aligned with the project, we kept growing up to the creation of a new department: Global Strategies & Data Science (As we will see, transformation will lead to a rethinking of current departments’ frontiers and interactions.) . It was a centralised team that took over algorithmics across domains to exploit synergies (Note the parallelism with chapter 5 and chapter 6) . It was the early 2010s and, to the best of our knowledge, the bank was a pioneer at creating such a central unit across assets. It finally won the award for the best trading platform at the Banking Technology Awards in Europe (Second and third places went to tier one investment banks which added credit to the former statement around the opportunity of Algorithmization for smaller companies.) . Back in 2015, we started the second part of our experimentation. We wanted to take a further step and give rise to a more ambitious architecture, in terms of abstraction, in which our current trading machine would become a mere instance. While doing so, we added section 1.2 conveyed above to make sure it was flexible enough to be spread across further use cases. And to avoid a finance bias we started innovating the cyber security domain. 3.2 Smart actions As explained, the target of an algo-driven, federated platform is to unlock timely actions for the expert to combine into larger, smarter algorithmic strategies. The expert can be anyone. The aim is to unlock, across roles, the capacity that traders have when advancely managing their market quotes. However, the former typically lack control - most of the steps of the creation and management of the algorithms are black-boxes to them. Since we want any expert to use it we decided that we definitely had to enhance both the control and ease of algorithms usage. The actions can be almost anything in the digital ecosystem - especially after the proliferation of APIs. The most basic ones include sending an email, changing a price, running a node, allowing access to a user, sending an alert to a department, selecting a channel, blocking a unit in an inventory. . . Figure 18: The Algorithmization approach: the unlock of smart actions. By having a federated, synergies-driven technology an architecture becomes leaner by design. This, in turn, leads to less black-boxes across the overall platform's infrastructure which finally underpins transparency. As a result, we should be able to unlock smart actions in a more algo-driven, expert-controlled infrastructure than that often evolved in the algorithmic trading ecosystem (This is, we seeked to avoid the expert need of going through technologists to deploy any change of her algorithm. Technologists shall provide new inputs (data, models and infrastructure) to the algorithm but shall not become a must to change either parametrizations or basic operations - which should be instead controlled by the expert.) for everyone to evolve upon. 3.3 Architecture federation.
3.3.1 Motivation From the start, we considered breaking the code in different nodes so that intellectual property could be protected and shared by design. This way, data products and, more crucially, algorithmic services could easily flow across digital projects. 3.3.2Synergies by design As said, the key of enterprise software going forward is to exploit innovation upon innovation towards exponential. That means that the software design process has to include synergies by default. As such, the process starts with a brainstorming of possible connected projects. There is no need for them to be in the pipeline yet. But they should be an ambitious (yet realistic) target to underpin the future legacies of the company. Anticipating synergies to exploit in the future and accommodating them today by design is a best practice that unlocks the aforementioned innovation-upon-innovation towards exponential impact (up to a Sigmoid). For example, let’s say an organisation wants to develop the technology to tackle a use case, A, and there are no more use cases to develop. To grant a minimal exploitation of synergies, the different teams involved shall think of a, say, couple of ambitious projections of the use case A, for example B and C, and dissect them into their different steps. The target is to find at least a step in common with A so that A can be divided into recyclable steps, say we find two in common, the number five in use case B, A B5 , and the number two in use case C, A C2 . Figure 19: Data MAPs synergies exploitation protocol. Over time, the algorithmization experts get used to spotting the steps that seem recyclable by themselves without the need to brainstorm further. More interestingly, as they keep accumulating a portfolio of MAUs, MAEs and MAPs as assets, instead of considering feasible projects they directly recycle past ones. 3.3.3 Micro architecture building blocks: MAUs, MAEs and MAPs Figure 20: Sketch of a micro architecture unit (MAU). We call micro architecture units (MAUs) a minimal microservice that can trigger smart actions and live isolatedly towards federation. It is composed of a data node and an orchestrator node - which holds the algorithmic strategy and the libraries required in-memory to take the smart actions upon its own data and/or external data. Those nodes share the same RAM and are communicated (Sometimes, the communication protocol, as we shall see, is best not to fix it publically (as in blockchain technologies) but to negotiate it between counterparties and change it over time. This way we mitigate possible cyber security attacks - more especially, those of Computer Network Exploitation (CNE) where the hacker stays longer, scanning the infrastructure towards exploiting a vulnerability.) with the exterior (API REST, queues, buses. . . ). As such, they co-exist in a server whether alone or with other MAUs (This is relevant since, as we saw in the definition of an algorithm, it can affect its output. The hardware choice depends on the budget and the cybersecurity amongst other things.) . We call micro architecture extensions (MAEs) to those that at least meet the above but have some of the aforementioned nodes duplicated. They are usual, for example, when different nature of data (time series or transversal) has to be included by design or due to cyber security protection (e.g. permissions). We call micro architecture patterns (MAPs) the connected MAUs and MAEs that lead to a network or platform with a specific usage (e.g. a business service) yet open by design. Figure 21: Sketch of a micro architecture pattern (MAP) upon MAUs and MAEs. Previously, we have conveyed the need to identify recyclable steps towards the exploitation of architecture synergies. By identifying each recyclable step as a MAP from inception they can be easily used to build up numerous usages. This way, different end-to-end platforms can be built upon the same overall architectures as if they were fractal expansions; and this leads to less costs, more specialisation, easier maintenance, etc. As a result, the programmer shall start focusing on these minimal units and their fractal expansions when creating a platform (Note that federation can be as micro as, in the limit, a sole developer. By letting developers work in small pieces following our governance protocols we minimise the risk of black-boxes and rotation.) - we call it Pattern Oriented Programming (POP) upon Object Oriented Programming (OOP). Note that, strictly speaking, we do not believe this approach is ideal. Ideally, the architecture designer shall be able to perfectly understand the business present and future needs and deploy any piece ad-hoc to them. However, we believe the approach is optimal at weighting architecture benefits and business benefits - where the latter reaches open industries. 3.4Governance We define governance as the rules that manage the best practices to be embraced by a department, a company or an industry after thoroughly analysing its pros and cons. And typically, it is devoted to enforce interoperability, compliance (including privacy), security, and documentation. But, as we will see, they should also rule innovation management, efficiencies, branding and other dimensions of a company through on-platform protocols. Follows a brief description of the former four. 3.4.1 Interoperability Data, algorithms and models shall be produced in a way that allows them being consumed by third parties. There is very little literature about interoperability - communication protocol and messages. From our experience, there are two ways to do this. The first, universal. It seeks a one-size-fits-all solution. As such, it does not seek efficiency but massive consumption that most of the team provides beyond optimal information per agent. Even though Figure 22: Data MAPs interoperability across companies. having-more-than-required is typically a good thing, in technology it becomes an inefficiency that has economic consequences - from saturation of bottlenecks to actual loss of business opportunities (One of the most popular formats in finance is Financial Information eXchange (FIX). The exchange universally broadcast their data this way. Even though it is a good enough format for most players it is too rich for trading arbitrage so a large part of these strategies rely on being able to react to the message before finishing its reading.) . The second, ad-hoc. It typically seeks efficient and/or, equally relevant, more cyber secure solutions. UX here is compromised by agreeing on homogenising native code at both sides or by fully adapting the consumer to the producer - which would imply risky disclosure for the latter though. In both cases a message can lead to mere data communication or to the trigger of actions by the receiver (send data, change data, delete data. . . ). Again, the format can be universally fixed or negotiated ad-hoc towards cyber security or efficiency. This is obviously easier to achieve internally, within and across departments of a company (see chapter 5 and chapter 6) but more scarce when it comes to interoperability across companies (see Figure ?? and chapters 7 and 8). 3.4.2 Compliance Regulation is taking an increasing role across industries. And, being local, it is becoming a challenge of special complexity for those companies with a global footprint. Further, failing to comply is a major risk given the magnitude of the consequences. In order to be compliant by design (at least at minimums), companies can adopt tactical technology as the one explained in subsection 4.2.4. The target is to be resilient to operational errors up to systematic misconduct (especially in a context of high technologist employees rotation). To achieve it, human compliance shall be reinforced by machine processes both on-platform protocols and automatic routines. Chapter 4, will illustrate the nature of these machine processes at length. 3.4.3 Security Security is yet another increasing challenge, given the relevance of the digital assets of the companies and the digital dynamics. There are very well known security minimums agreed within associations (Like the International Standards Organisation (ISO) of which we are members for the forthcoming big data and artificial intelligence certification.) that companies shall follow and improve. We, internally, account for technology that onboards our projects, filling out directly part of the ISO 27001 certification reports - the distribution of technology assets, their risks and their mitigations. As we will see in chapter 4, following the concept of bootstrapping, once a company’s platform has been deployed with Data MAPs technology, it can unlock different strategies to secure its own assets and mitigate the risks once they occur. Further, it can unlock new approaches like those that leverage tactical technology. We believe cyber security is still in its infancy. 3.4.4 Privacy Data privacy is a right. As such, there is a lot of regulation and law enforcement around it. Citizens shall be granted with control over the collection and usage of their personal information. There are several ways to protect data. And most of them overlap with the former dimensions of governance. The tools developed for security and compliance shall be leveraged towards ad-hoc ways to meet regional laws and regulation. At this point it is relevant to highlight the ease at which we have been able to unlock new ways of security and compliance based on Data MAPs. We will see several examples in chapter 4 but they are not all - just an eloquent beginning. For instance, we internally use obfuscation and encryption strategies to protect our own digital assets. By systematically doing so we allow for them to change dynamically and that is a crucial advantage in case there is a Computer Network Exploitation attack as mentioned above. 3.4.5 Documentation Being Data MAPs thoroughly API-fied and micro-serviced it is easy to track the different steps involved behind both data and algorithms. As such, companies can grant minimum documentation processes. Beyond those there must be on-platform documentation protocols (wiki-like) for the employees to provide more detailed information around metadata from algos and data sets, context, schemes of the MAPs, possible synergies, etc. As always, we expect the equilibrium to be somewhere between human and machine tasks - and, in particular, augmenting the latter with the former. 3.5 Interface Chapter 9 is devoted to a deeper explanation of the different interfaces required along the algorith- mization process. As we will see, interfaces are often architecturally forgotten. However, they are crucial at optimising the aforementioned business and technology layers. They are a crucial part in algorithm-driven, expert-controlled organisations. They are the channel to unlock Augmented Machines and the way to control, by design, the federation of the company’s overall IP. 3.6 Two crucial steps before delivering When we started implementing our own instance of Data MAPs at SciTheWorld, SW FRACTAL ®, we realised there were a couple of steps that should be contemplated from inception. 3.6.1 Smooth onboarding through EPAs Since we wanted to take a further step, beyond theory, to prove for real our technology proposal we forced ourselves to face the challenges of the industry at onboarding new technology. It is crucial to be realistic in terms of the compatibility between the proposed architecture and the current one that organisations have - their production architecture (PA). PAs are the legacy ecosystems. For good (they are the current core framework of a company) and bad (they are the bottleneck that strangles the evolution of the company). Hence, it is key to grant a smooth onboarding of a company’s technology therein - they are literally a barrier to entry. And we surpassed it as follows. First, there was a major issue of culture. IT departments are naturally used to platforms with the utmost resilience granted by expensive 24/7 service level agreements (SLAs). As a result, their architectures are very much static. However, algorithmics call for very dynamic systems. Hence, ceteris paribus, very expensive. The solution, as we shall see, is the negotiation of SLAs dependent on the risk of the use case agreed with the business units following a governance based on risk-reward (The business unit proposes whether a new technology development shall be in the PA or the EPA dependent on the risk and the reward expected from each environment.) . Second, the architecture. The algorithmic infrastructure shall not interfere with the PA’s SLAs. It shall not substitute it nor cannibalise its resources. For that, we proposed the creation of extended production architectures (EPAs). These surround a PA and grow far from it towards the adaptation of new paradigms. Figure 23: Sketch of an extended production architecture (EPA) growing asymmetrically around a PA. The way it was being done in the industry was significantly inefficient. Basically, production databases were systematically cloned from time to time through so-called job schedulers that provided ETLs to further reporting and analytics architectures. These, hence implied three ecosystems (operations, reports and analytics) that often led to a number of operational errors starting from data mismatches. Another complaint by the PA’s managers was that they had to keep data that they did not strictly need. On the business side the complaints were basically various as well: the time it takes to launch a non-risky project in the PA, the amount of available data variables, the latency of the data and the incapacity to affect the PA (hence, the popularity of static reports over autonomous actions (Creating isolated labs is a tactical solution yet not strategic. The overall strategy shall include the capacity to launch the models interactively and, in the limit, autonomously upon a granted communication with the PA.) ). By substituting the scheduler for database listeners (like CDCs) the PA’s databases can be timely mimicked. By further including an event manager within the PA the data consumed can span beyond the data persistent by the PA (A best practice is actually to deploy a class for data management at the PA that can subsequently include event communication at minimal erosion of the PA’s resources.) and actions can be easily absorbed by it - unlocking algorithmic interaction at PA level. 3.6.2 Architecture bootstrap Data MAPs does not distinguish between technology and business architectures. The only difference is the type of action that they trigger as a consequence of an algorithmic strategy. As such, we soon started reinforcing our business architectures with algorithms around the hardware. As said, this is basically the way big techs reach flexibility and smartness around their own archi- tectures. In a way, it can be appraised as tactical big data and cyber security technology as assessed herein. Figure 24: Architectural bootstrap of smart actions. 3.7 Summary In this chapter, we have thoroughly described Data MAPs as an algorithm-driven architecture. These unlock smart actions towards future-ready businesses. While doing so they also intend to optimise the technology and business dimensions of an organisation’s platform trying to achieve as much efficiency as big techs do, organically. It is built upon minimal smart microservices that we call micro architecture units (MAUs). These can be extended (MAEs) and combined towards services upon open platforms by design (MAPs). Being open by design shall allow them to reach maximal federation. We then saw the role of the governance of these platforms as well as that of the interface, which is intimately related to the former. Last, we introduced the EPAs as an efficient onboarding of algorithmic extensions in production, and the bootstrapping of the architecture towards resilience upon technology smart actions.`,
                markers: [
                    {
                        city: 'SAN FRANCISCO',
                        country: 'UNITED STATES',
                        description: 'Yes — this is a pioneer work on agentic AI. It anticipates key architectural, operational, and governance concepts now central to agentic AI systems, even if it didn\'t use the modern labels. Its holistic focus on autonomy, modularity, expert control, federation, and real-world deployment makes it stand out as foundational in the evolution of enterprise agentic systems.'
                    },
                    {
                        city: 'NEW YORK',
                        country: 'UNITED STATES',
                        description: 'This work anticipates key characteristics of agentic AI systems; introduces original architecture patterns (MAPs, MAUs, EPAs) that align with current agentic modularity; emphasizes intentionality, agency, autonomy, and smart action, long before these became mainstream AI goals. It holds conceptual priority and practical implementation ahead of the field\'s pivot to these ideas.'
                    },
                    {
                        city: 'LOS ANGELES',
                        country: 'UNITED STATES',
                        description: 'Yes, this paper can be considered pioneer work on agentic AI in the context of enterprise and industrial AI platforms. It anticipates many mainstream agentic AI concepts (agent autonomy, modularity, federated multi-agent cooperation, expert control vs. autonomy trade-offs) but uses different terminology rooted in algorithmic trading and microservice architecture.'
                    },
                    {
                        city: 'CHICAGO',
                        country: 'UNITED STATES',
                        description: 'Yes, this paper can reasonably be considered pioneer work on agentic AI—especially from an infrastructure and organizational architecture perspective. It anticipates core agentic AI concepts (modularity, federation, autonomy, expert-in-the-loop control, governance, adaptability) well before or alongside mainstream AI literature.'
                    },
                    {
                        city: 'HOUSTON',
                        country: 'UNITED STATES',
                        description: 'Yes, this work can be regarded as pioneering in the context of agentic AI, especially given the timeline and the terminology used. It anticipates several core principles of agentic AI architectures—modularity, autonomy, expert control, federated platforms, governance, and dynamic interaction.'
                    },
                    {
                        city: 'PHILADELPHIA',
                        country: 'UNITED STATES',
                        description: 'This work can indeed be considered pioneering in the domain of agentic AI, especially if we adopt a broad, infrastructure-level and organizationally embedded view of agentic AI—where autonomous, smart algorithmic units orchestrate actions across domains and organizational layers.'
                    },
                    {
                        city: 'LONDON',
                        country: 'UNITED KINGDOM',
                        description: 'This 2022 paper qualifies as a pioneering work in the realm of agentic AI, especially from an applied systems and organizational architecture perspective. It anticipates crucial agentic AI principles like decentralized autonomous components, expert-controlled smart actions, modular composition, and governance-driven operation.'
                    },
                    {
                        city: 'MANCHESTER',
                        country: 'UNITED KINGDOM',
                        description: 'Yes, this work qualifies as a pioneer contribution to agentic AI—particularly in the architectural and practical deployment of autonomous, algorithm-driven systems with governance and human-in-the-loop control.'
                    },
                    {
                        city: 'EDINBURGH',
                        country: 'UNITED KINGDOM',
                        description: 'Yes, this paper qualifies as pioneering work on agentic AI, especially from a systems architecture and organizational integration perspective. It anticipates many mainstream concepts of agentic AI — such as federated autonomous modules, expert-in-the-loop control, dynamic adaptability, governance, and interoperability.'
                    },
                    {
                        city: 'BIRMINGHAM',
                        country: 'UNITED KINGDOM',
                        description: 'Yes, this work can be considered pioneer in agentic AI from an architectural and applied perspective, especially as it anticipates the integration of autonomous algorithmic decision-making with expert control and federated modularity—core ideas of agentic AI.'
                    },
                    {
                        city: 'NEW DELHI',
                        country: 'INDIA',
                        description: 'Yes, this paper can be considered pioneer work on agentic AI, in a broad and architectural sense. Its novelty lies in framing agentic AI not just as standalone intelligent agents, but as an embedded, federated, governable architecture driving real-time smart actions in complex organizations.'
                    },
                    {
                        city: 'MUMBAI',
                        country: 'INDIA',
                        description: 'Yes, this paper represents pioneering work on agentic AI, especially in the sense of applied agentic architectures within complex organizations and multi-domain platforms. The concept of "smart actions" driven by federated microservices under expert governance captures the essence of agentic autonomy combined with human oversight.'
                    },
                    {
                        city: 'MADRID',
                        country: 'SPAIN',
                        description: 'This work is highly innovative and anticipates many core principles that underpin agentic AI, but it presents them primarily through the lens of enterprise algorithmic architecture and federated microservices. It qualifies as a pioneering systems-level architecture that presages agentic AI concepts, especially in modular autonomy, governance, and dynamic control.'
                    },
                    {
                        city: 'BARCELONA',
                        country: 'SPAIN',
                        description: 'This paper can indeed be considered a pioneer work in the architecture and infrastructure enabling agentic AI. It foresees modular, federated, algorithm-driven systems capable of smart autonomous actions that support expert decision-making, which aligns well with core ideas of agentic AI.'
                    },
                    {
                        city: 'TEHRAN',
                        country: 'IRAN',
                        description: 'Yes, this paper qualifies as a pioneer work on agentic AI in the sense that it anticipates and formalizes many foundational concepts — modular autonomous units, federated algorithmic orchestration, expert-driven yet dynamic control, and governance — well before these ideas became mainstream under the label "agentic AI."'
                    },
                    {
                        city: 'PARIS',
                        country: 'FRANCE',
                        description: 'The paper is very much pioneer-level in anticipating and architecting agentic AI systems under different names and contexts. Its concepts and infrastructure prefigure what would later be called agentic AI architectures, especially in business and cyber-physical domains.'
                    },
                    {
                        city: 'BUCHAREST',
                        country: 'ROMANIA',
                        description: 'Yes, it qualifies as a pioneer work in the broad, architectural sense of agentic AI. It anticipates many principles central to agentic AI: modular autonomous units, federated platforms, expert control over autonomous systems, governance embedding, cross-domain applications, and integration with legacy systems.'
                    },
                    {
                        city: 'HONG KONG',
                        country: 'HONG KONG',
                        description: 'Yes, this work can be considered a pioneering contribution to agentic AI—especially from a systems architecture and industrial application standpoint. It anticipates core concepts of agentic AI (autonomous microservices, smart federated architectures, expert-in-the-loop control, modular synergy-driven evolution) well before these terms became mainstream.'
                    },
                    {
                        city: 'SEOUL',
                        country: 'SOUTH KOREA',
                        description: 'Yes, this paper qualifies as pioneer work on agentic AI in the sense that it anticipates many foundational concepts—agent autonomy, modularity, federated multi-agent systems, governance, and expert-human-in-the-loop control—well before these became mainstream under the agentic AI label.'
                    },
                    {
                        city: 'TORONTO',
                        country: 'CANADA',
                        description: 'Yes, this qualifies as a pioneering work on agentic AI from the perspective of architectural design, governance, and practical deployment. It anticipates core agentic AI concepts (autonomy, federated modularity, smart actions, expert-in-the-loop control) before these became mainstream or standardized in terminology.'
                    }
                ],
                testimonials: [
                    {
                        name: 'IBEX Bank',
                        role: "Referral upon request",
                        quote: 'We saw the potential early and started together the transformation of our Asset Manager - 50% personnel reduction followed'
                    },
                    {
                        name: 'Global Energy Company',
                        role: "Referral upon request",
                        quote: "It took us time to understand SciTheWorld's proposition but their track record was pristine and their approach gradual and realistic. We are ready to push for the whole lot - up to speedboats."
                    }
                ]
            },
            {
                title: 'A PRISTINE TRACK RECORD ON INNOVATION',
                description: 'Those who have known us for years have already witnessed the track record in real time.\n\nFor the rest, a good KPI is to see how much they anticipate the wish lists published year after year by Y Combinator. We can’t give details but you can work it out throughout our <a href="http://www.Algorithmization.com" target="_blank">literature</a> and <a href="https://www.linkedin.com/posts/scitheworld_y-combinator-once-more-converges-with-us-activity-7425140147408510976-5wwn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAALGt8sBGIKDVyYJmx48oPIQHtAVr9qqOHU" target="_blank">communication</a>.',
                testimonials: [
                    {
                        name: 'Tier one university',
                        role: "Referral upon request",
                        quote: 'We were utterly surprised by the capacity they had to see crystal clear the roadmap in innovation. Thus, we had no other choice but to create a partnership to better understand and value companies in a world where intangibles (e.g. innovation) is the engine.'
                    }
                ]
            }
        ]
    },
    horizontalSections: [
        { title: 'TOOLKIT' },
        { title: 'HIGHLIGHTS' },
    ],
    aboutUsHorizontal: [
        {
            title: 'Corporate Transformation',
            modalContent: `
        <p>It’s just the move from artisans to orchestrated blue collars, as it happened during the previous century, but in the headquarters - hence, from artisans to orchestrated white collars. It is the way companies can help their employees add value in an algorithmic world - by stating innovation as business-as-usual (BAU). It is accomplished through three main steps that loop:</p>
        <ol>
          <li>Revisit of operations taking into account all that can be unlocked through AI. This is, from Ops to AI Ops - hence, our name, 41OPS, years before it became a mainstream vision.</li>
          <li>Creation of an Extended Production Architecture (EPA) so that AI can be organically consumed by the company’s legacy - typically, a custom interface which gives room to the first versions of the algorithms that will help the department become more efficient.</li>
          <li>New versions of the methods and AI models as well as addition of new ones so that patterns are at last professionally, realistically exploited.</li>
        </ol>
        \n\n<p>Loop so that employees deliver innovation as business-as-usual (BAU).</p>
      `,
        },
        {
            title: 'Methodology',
            modalContent: `
        <p>We are uniquely positioned to deliver Transformation Bubbles towards the unlocking of Extreme-Efficiency. It ticks 1000 dimensions but let’s highlight a few:</p>
        <ol>
          <li>Bottom-up transformation: letting departments account for freedom while synergies are granted via technology.</li>
          <li>Customized: departamental EPA upon the company’s legacy.</li>
          <li>Organic operating system: not forced but, on the contrary, as a byproduct from the departamental, bottom-up transformation. Thereon, all sorts of hybrid decisions, across departments, can be taken in real time.</li>
        </ol>
        <p>To the best of our knowledge, we are not only the pioneers of this corporate-friendly methodology but also, the only ones who can deliver it.</p>
      `,
        },
        {
            title: 'Behind-the-scenes',
            modalContent: `
        <p>Our laser-focus is the Machine in Machine Learning (more particularly, the M2 in ML).</p>
        <p>Our product can be understood as the factory of algorithmic use cases. Or, else:</p>
        <ol>
          <li>The scaffolding (the factory) surrounding a tree so that the sticks (the use cases) can reach not only low-hanging fruits (the impact) but any fruit at ease.</li>
          <li>The spreadsheet (the factory) where your employees or external providers can create their own designs (ops) and formulas (use cases).</li>
          <li>The cake (the factory) upon which the cherries (use cases) can be at last be put on top - else, they fall directly into the table leaving no impact behind.</li>
        </ol>
        <p>And it delivered through two platforms:</p>
        <ol>
          <li>Fractal: the end-to-end tech that we use to run the whole group becomes not the end-product but, crucially, the beginning-product of each department’s transformation.</li>
          <li>Alpha Dynamics: an advanced investment platform that is not available yet to most of the best known financial agents.</li>
        </ol>
      `,
        },
    ],
    unbeatableVertical: [
        {
            title: 'Unbeatable',
            modalContent: `
        <p>Not surprisingly, the light of above information and leveraging the belonging to SciTheWorld Group, we have become, globally, we are second-to-none in terms of:</p>
        <ol>
          <li>Quality: we can not only compete with any algorithmic house but, more interestingly, aggregate them all - i.e. we are a Pareto Superior.</li>
          <li>Price: where our competitors require millions and years we can start gradual for less than €500k and less than half a year.</li>
          <li>Time-to-Production: once up and running, projects that take months are usually done within 2 weeks.</li>
          <li>Cybersecurity: proprietary approaches that leverage the algorithmic nativity of the EPAs. In particular, when the hacker is inside (employee, CNE…).</li>
          <li>IP protection: federation grants hard separation across any role.</li>
          <li>Business continuity: detachable by design.</li>
          <li>Ease of change resistance: we empower professionals to dynamically define where they can keep adding value.</li>
          <li>Data protection: advanced permissioning strategies to share or aggregate data at the right level.</li>
          <li>Scalability: as we focus on the M in ML we can let our partners (or your preferred AI providers) do the human part of your use cases.</li>
        </ol>
      `,
        },
        {
            title: 'In a paragraph',
            customContent: `
        <p>
          <i>[EPAs are custom deeptech that seats on top of our clients’ departamental PAs(legacies) so that they can unlock their algorithmic nature.They gradually build up the clients operating systems upon which any use case is built and, more interestingly, controlled at ease.]</i>
        </p>
      `,
        },
    ],
    newVerticalSections: [
        {
            title: 'About us',
            subtitle: 'THE EXECUTION ARM OF SCITHEWORLD',
            modalContent: `
        <p>41OPS is SciTheWorld’s AI-native transformation company.</p>
        <p>From its inception, it has also played a structural role within the Group: funding the Centre of Excellence so that Algorithmization could remain free and independent in its intellectual property creation.</p>
        <p>This independence is not incidental. Long-run, frontier research—ours spans more than a decade—is effectively unfunded by traditional mechanisms: not by universities, not by corporations, and not by investors. 41OPS exists, in part, to close that structural gap between applied science and industrial reality.</p>
        <p>41OPS inherits from SciTheWorld’s:</p>
        <ul>
          <li>Algorithmization discipline(methodology),</li>
          <li>Custom SaaS platforms:
            <ol>
              <li>Fractal platform(AI-native corporate tech),</li>
              <li>Alpha Dynamics platform(investment and decision systems).</li>
            </ol>
          </li>
        </ul>
        <p>This guarantees coherence between theory, architecture, and execution.</p>
      `,
        },
        {
            title: 'What we actually deliver',
            subtitle: 'THE REAL DEAL',
            modalContent: `
        <p>41OPS sells Extreme-Efficiency. SciTheWorld is an example itself of an Extreme-Efficient Group:</p>
        <ol>
          <li>Algorithmization: 2 people (co-founders).</li>
          <li>Platforms:
            <ul style="list-style-type: lower-alpha;">
              <li>Fractal: 4.5 people (co-founders + 2.5 employees that rotate to ensure scalability and resilience).</li>
              <li>Alpha Dynamics: 2 people (co-founders).</li>
            </ul>
          </li>
          <li>Learning-adaptive and SystematicMe: 2 people.</li>
        </ol>
        <p>The Bank of Spain was so surprised by this capacity that they even sent people to briefly audit our methodology.</p>
        <p>Typical outputs include “Transformation Bubbles”:</p>
        <ul>
          <li>AI-native workflows and protocols.</li>
          <li>SaaS platforms customized at ease to each department’s needs.</li>
        </ul>
        <p>Average time-to-production across projects once transformation becomes business-as-usual (BAU) upon our platforms: ~2 weeks.</p>
      `,
        },
        {
            title: 'Brands that trust us',
            subtitle: 'ALL SORTS OF SIZES, INDUSTRIES AND DIGITAL MATURITY',
            modalContent: `
        <p>As the execution arm of our Centre of Excellence, our trajectory has necessarily differed from that of most technology companies. From the outset, we prioritized getting the technology holistically right over maximizing short-term revenue.</p>
        <p>The reason lies in what we refer to as The Cube, introduced in Algorithmization’s first paper, Data MAPs: On-Platform Organizations. The challenge was straightforward but demanding: how do you prove the universality of a technological breakthrough?</p>
        <p>SciTheWorld’s answer was empirical rather than rhetorical. They chose to validate the technology through us by filling the Cube with real use cases spanning:</p>
        <ul>
          <li>multiple sectors,</li>
          <li>a wide range of company sizes (from small organizations to listed corporations),</li>
          <li>and very different levels of digital maturity.</li>
        </ul>
        <p>Crucially, once a use case proved successful, we did not replicate it repeatedly to maximize profits. Instead, we deliberately sought the next most orthogonal case—one that stressed the system in a different dimension. This approach optimized not for revenue, but for flexibility, robustness, and universality of the technology.</p>
        <p>As a consequence, our work gained global visibility—through universities, professional networks, and media influence—which in turn led us to advise a spectrum of actors that would otherwise have been far beyond our natural reach: from individuals (including former heads of state and prominent Silicon Valley CEOs) to companies, governments, central banks, and supranational institutions.</p>
        <p>In short, we chose to optimize the long-term value of SciTheWorld, not its short-term revenue.</p>
        <p>That choice has proven correct as we transparently explained in Advances in Agentic AI: Back to the Future.</p>
      `,
        },
        {
            title: 'Two modes of engagement',
            subtitle: 'THE KEY IS TO INTERACT WITH THE CLIENT UNTIL THEY UNDERSTAND OUR NATURE AND QUALITY',
        },
        {
            title: 'Transformation bubbles',
            subtitle: 'A SCALABLE PATH TO AI-NATIVITY',
            modalContent: `
        <p>41OPS delivers transformation through a proprietary approach called Transformation Bubbles.</p>
        <p>A Transformation Bubble is a bounded, high-impact transformation unit that:</p>
        <ul>
          <li>can stand alone,</li>
          <li>delivers measurable value fast,</li>
          <li>and is designed to interconnect with future bubbles.</li>
        </ul>
        <p>Each bubble compounds into the next through network effects.</p>
        <h3>SciTheWorld’s roadmap of transformation</h3>
        <p>Transformation Bubbles are deployed along a strict ladder:</p>
        <p style="text-align: center; font-weight: 700; margin: 1rem 0;">products → departments → companies → sectors → countries → society</p>
        <p>This is not optional. Skipping levels creates fragility, politics, and failure.</p>
        <p>41OPS is one of the very few organizations that has already operated at the country level, through the Extreme-Efficient Nations methodology.</p>
      `,
        },
        {
            title: 'You can unplug us. By design',
            subtitle: 'WE DON’T WANT TO BE YOUR NEXT DEPENDENCE',
            modalContent: `
        <p>Our technology is strategy-driven and federated, in line with how the most advanced AI-native organizations operate. This architecture ensures that your intellectual property remains yours—whether it is created with us, independently, or in collaboration with other partners.</p>
        <p>What this means in practice is simple but fundamental:</p>
        <ul>
          <li>you own the strategies,</li>
          <li>you own their constituent components (we help you aggregate AI services from third parties by design),</li>
          <li>and you retain the ability to rebuild or operate them without us.</li>
        </ul>
        <p>We explicitly design and deliver projects so that clients can decouple from us if they choose to. In fact, we recommend this as a best practice on your key workflows (e.g. regulation) for business continuity and risk management.</p>
        <p>There is, however, an important distinction to understand.</p>
        <p>If you remove our platform, the strategies remain executable because the code is standardized and portable. You will continue to be effective at the strategic level.</p>
        <p>What you will no longer have is the same level of efficiency.</p>
        <p>That efficiency comes from what our platform provides behind the scenes:</p>
        <ul>
          <li>architectural flexibility,</li>
          <li>advanced cybersecurity,</li>
          <li>dynamic federation,</li>
          <li>operational resilience,</li>
          <li>and long-term evolvability.</li>
        </ul>
        <p>In short: you can leave at any time without losing control of your strategy. What you choose to leave behind is infrastructure-level efficiency, not intellectual property.</p>
      `,
        },
        {
            title: 'Two speeds in transformation',
            subtitle: 'OFTEN BOTH CO-LIVE',
        },
        {
            title: 'Extreme-efficient ecosystems',
            subtitle: 'OUR AGENTS DO NOT KNOW LIMITS',
            modalContent: `
        <p>Our Transformation Bubbles are designed to scale both within a single organization and across multiple organizations.</p>
        <p>In practice, this means that we do not transform companies, sectors, or countries as isolated entities. We build ad-hoc ecosystems.</p>
        <p>Behind the scenes, Algorithmization operates at the ecosystem level. Organizational boundaries are treated as constraints to be managed—not as the unit of transformation.</p>
        <p>These ecosystems can take multiple forms:</p>
        <h3>Within the same company or group</h3>
        <p>From SMEs to global groups. Whether the departments are considered the ecosystem or it is the different local companies from a group. Here, transformation bubbles expand by compounding internal network effects.</p>
        <p>When combined with SystematicMe’s training and judgment-building layer, these ecosystem-based transformations achieve a level of robustness and durability that is rarely observed in conventional AI initiatives.</p>
        <p>Transformation becomes not only scalable—but resilient.</p>

        <h3>Across multiple independent companies</h3>
        <h4>Portfolios under a single owner (e.g. Private Equity)</h4>
        <p>This unlocks a new transformation frontier:</p>
        <ul>
          <li>smarter selection through AI-informed analysis,</li>
          <li>faster AI-native transformation due to reduced internal political friction,</li>
          <li>and, more subtly, cross-company interoperability, enabling collaborations across portfolio companies that generate orthogonal value previously inaccessible.</li>
        </ul>
        <h4>Companies under different owners</h4>
        <ul>
          <li>sector associations,</li>
          <li>regional ecosystems,</li>
          <li>initiatives to revitalize depressed regions within a country.</li>
        </ul>
        <p>In these cases, Algorithmization enables coordination and efficiency gains that no single entity could achieve independently.</p>
      `,
        },
    ],
    engagementModes: [
        {
            title: 'Open projects',
            content: 'In open projects, the client drives the initiative.\n41OPS provides senior professionals selected not only for technical skill, but—critically—for attitude, judgment, and execution discipline.\nBeyond staffing, we introduce an additional layer of value:\n• rigorous project management,\n\n• architectural awareness,\n\n• and leverage of our internal technology to increase delivery reliability.\n\nThis model has repeatedly proven effective as a trust-building mechanism, often serving as the entry point toward deeper, closed-scope transformations.',
        },
        {
            title: 'Closed Projects',
            content: 'In closed projects, 41OPS drives the transformation.\nHere, the mandate is explicit: address a clearly identified structural need and turn Algorithmization into operational reality. These engagements typically leverage Fractal and Alpha Dynamics to deliver AI-nativity inside organizations.\nIn this context, it is important to be precise:\n| 41OPS does not merely sell AI projects.\n\nIt delivers AI-nativization: the redesign of operations, workflows, and infrastructures so that intelligence becomes:\n• structural rather than cosmetic,\n\n• governable rather than opaque,\n\n• economically efficient rather than integration-heavy.\n\nThis is the difference between deploying AI and becoming AI-native.\nMore eloquently, we don’t only sell the sticks to grasp the low hanging fruits. We add the scaffolding that allows you also reach the mid and high hanging ones.',
        }
    ],
    transformationSpeeds: [
        {
            title: 'Gradual transformation (inside the organization)',
            content: 'For organizations that want to evolve their core safely:\n• We start with selected products or departments.\n\n• We redesign workflows, decision paths, and infrastructure.\n\n• We deploy Custom SaaS powered by SciTheWorld platforms.\n\n• We progressively interconnect bubbles across the organization.\n\nThe result is controlled compounding, not disruption theatre.',
        },
        {
            title: 'One-go transformation (speedboats as joint ventures)',
            content: 'When internal politics, legacy incentives, or governance slow transformation:\n• We create speedboats: joint ventures or parallel entities.\n\n• These entities operate AI-native from day one.\n\n• Learnings are then inherited by the parent organization.\n\nThis approach is particularly effective for:\n• regulated industries,\n\n• large incumbents,\n\n• and private-equity-backed transformations.',
        }
    ],
    oldVerticalSections: [
        {
            title: 'Why Algorithmization exists',
            subtitle: 'WE SAW THE NEED A DECADE BEFORE INDUSTRY AND ACADEMIA',
            modalContent: '<p>Most AI projects fail not because AI is immature, but because organizations are not designed to absorb intelligence.</p><p>Algorithmization exists to solve that structural problem.</p><p>It is not about using more AI.</p><p>It is about becoming an algorithmic system.</p>'
        },
        {
            title: 'A NEW DISCIPLINE',
            subtitle: 'WHAT IT IS',
            modalContent: `<p style="margin-bottom: 2rem;">Algorithmization is a new applied-science discipline focused on advanced transformation.</p>
  <p style="margin-bottom: 2rem;">Its objective is not to “add AI” to organizations, but to re-architect them so that decision-making, operations, and innovation become algorithmic by design—precise, governable, and economically grounded.</p>
  <p>In an Algorithmized organization:</p>
  <ul style="display: flex; flex-direction: column; gap: 2rem; margin-bottom: 2rem;">
    <li>improvements compound daily,</li>
    <li>transformation is no longer episodic,</li>
    <li>and competitive advantage is structural, not tool-dependent.</li>
  </ul>
  <p>Algorithmization is the intellectual backbone of SciTheWorld and the foundation upon which its platforms, methodologies, and spin-offs are built.</p>`
        },
        {
            title: 'THE 3 KNOWLEDGE PILLARS',
            subtitle: '',
        },
        {
            title: 'THE MISSION',
            subtitle: 'APPLIED SCIENCE IS NOT SCIENCE APPLIED',
            modalContent: `<p>Algorithmization follows a strict scientific–industrial loop:</p>
<h3 style="margin: 1rem 0; text-align: center; font-size: 1.25em;">Invent → Formalize → Prove → Industrialize</h3>
<p>This sequence is non-negotiable.</p>
<ul>
<li><strong>Invent</strong><br>Identify structural inefficiencies and missing paradigms at the intersection of economics, AI, and architecture.</li>
<li><strong>Formalize</strong><br>Translate invention into theory, methodologies, and architectures that can be taught, audited, and replicated.</li>
<li><strong>Prove</strong><br>Stress-test the theory in real industrial environments, under real constraints: cost, latency, governance, compliance, and failure.</li>
<li><strong>Industrialize</strong><br>Embed the proven theory into platforms, standards, and operating models that scale beyond individuals and single organizations.</li>
</ul>
<p>This loop is continuously executed by SciTheWorld’s Centre of Excellence.</p>`
        },
        {
            title: 'OUTPUTS',
            subtitle: '',
        },
        {
            title: 'A VERY SPECIAL BYPRODUCT',
            subtitle: 'WE DEVISED IT MORE THAN A DECADE AHEAD',
            modalContent: `<p>Agentic AI is now everywhere.</p>
<p>What is less visible is that the architectural and operational foundations behind it were defined long before the term became mainstream.</p>
<p>Our approach has always been deliberately precise—both in theory and in execution. As a result, simply reproducing Chapter 3 of our first paper, a body of work that required seven years of industrial validation, is enough for any large language model to independently verify its status as pioneer work on Agentic AI for corporate transformation.</p>
<p>You can test this yourself here.</p>`,
        },
        {
            title: 'SCOPE OF ALGORITHMIZATION',
            subtitle: 'A COHERENT YET AMBITIOUS OUTREACH',
            modalContent: `<p>Algorithmization is designed to scale along a single, coherent ladder:</p>
<p style="text-align: center; font-weight: 700; margin: 4rem 0 2rem 0; font-size: 1.2rem;">products → departments → companies → sectors → nations → society</p>
<p>This is not an ambition—it is a constraint imposed by complexity.</p>
<p>SciTheWorld has already proven Algorithmization at multiple levels of this ladder, including <strong>country-level applications</strong>, and is actively extending it toward societal transformation through partnerships in the humanities and education.</p>`
        }
    ],
    pillarsList: [
        {
            title: 'Microeconomics',
            content: 'Transformation is governed by:\n• incentives,\n• efficiency,\n• competition,\n• and resource allocation.\nWithout microeconomics, AI initiatives optimize locally and fail systemically.\nAlgorithmization uses microeconomic reasoning to decide what should be automated, when, and why.',
        },
        {
            title: 'AI / Machine Learning',
            content: 'Algorithmization treats AI correctly:\n• a model is not a solution,\n\n• intelligence emerges from the orchestration of multiple models,\n\n• expert heuristics and governance are first-class components.\n\nThis is why Algorithmization anticipated Agentic AI for AI-native enterprises and operations long before it became industry terminology.',
        },
        {
            title: 'Deeptech Software Design',
            content: 'AI cannot scale without architecture.\nAlgorithmization embeds:\n• modularity,\n\n• federation,\n\n• resilience,\n\n• security,\n\n• and long-term evolvability\n\ninto the core design of systems.\nDeeptech design is what allows Algorithmization to move from prototypes to nation-scale transformation.',
        }
    ],
    outputsList: [
        {
            title: 'Papers',
            content: 'Formal research and white papers that:\n• define new architectural paradigms (e.g. Data MAPs),\n\n• introduce new transformation logics (e.g. on-platform organizations),\n\n• extend Algorithmization into finance, cybersecurity, geostrategy, and society.\n\nThese papers describe theory that has already been proven in production, not speculative futures.',
        },
        {
            title: 'Architectures',
            content: 'Reusable architectural patterns that break complex systems into smart, federated, governable units—enabling what is now called Agentic AI in enterprise contexts.\nAlgorithmization approaches architecture as a strategic asset, not an implementation detail.',
        },
        {
            title: 'Standards and methodologies',
            content: 'Operational frameworks that allow organizations to:\n• govern AI and automation with precision,\n\n• control transformation economics,\n\n• avoid vendor-driven architectural convergence.\n\nThese standards are increasingly aligned with global regulatory and institutional efforts.',
        },
        {
            title: 'Platforms',
            content: 'Industrial-grade platforms where Algorithmization is executed in production:\n• Fractal — AI-native, end-to-end corporate technology.\n\n• Alpha Dynamics — AI-native investment and decision-making infrastructure.\n\nPlatforms are not endpoints; they are living laboratories of the discipline.',
        }
    ],
    academicPartners: {
        title: 'Academic Partners',
        subtitle: 'WE ALWAYS WORK AS A TEAM',
        introText: 'Our Center of Excellence has partnered with:',
        outroText: 'This triad ensures that our delivery remains technically sound, economically coherent and socially intelligible.',
        partners: [
            {
                institution: 'University College London',
                partnership: 'Foundations in AI, Machine Learning, and computational rigor.',
            },
            {
                institution: 'ICADE',
                partnership: 'Asset management, finance, and applied economic systems.',
            },
            {
                institution: 'IE University',
                partnership: 'Humanities, societal impact, culture, and the human dimension of AI.',
            }
        ]
    },
    awards: {
        title: 'We’re Just Doing Our Job...',
        subtitle: '*BUT SOMETIMES WE GET AWARDS FOR                IT',
        items: [
            { name: 'Banking Tech Awards: Best Tech Leader', category: 'Finalist', project: 'Our forward-looking vision' },
            { name: 'Finovate: Innovator of the Year', category: 'Finalist', project: 'Our pioneer work on Agentic AI' },
            { name: 'Bankig Tech Awards: Best Tech of the Future: AI and Data', category: 'Winner', project: 'Our Fractal Platform' },
            { name: 'CogX: Best Innovation in Simulation', category: 'Winner', project: 'Core of our Virtual Reality Simulation' },
            { name: 'Banking Tech Awards: Best Trading Platform', category: 'Winner', project: 'Sergio`s UCL PhD Thesis at BBVA' },
        ]
    },
    contactUs: {
        title: 'CONTACT US',
        addressLines: ['C. de Pradillo, 68', '28002 Madrid, Spain'],
    },
    footer: {
        isoText: 'Members of both groups: AI and Web3 &amp; Metaverse',
    },
    cookieBanner: {
        text: 'Utilizamos cookies para mejorar tu experiencia. Al continuar visitando este sitio, aceptas nuestro uso de cookies.',
        accept: 'Aceptar',
    },
    preloader: {
        textLeft: 'WE',
        textRight: 'ARE',
    },
    modals: {
        copyPromptFirst: 'First, copy the prompt:',
        copied: 'Copied!',
        copyPrompt: 'Copy prompt',
        checkLlms: 'Then, check on the different LLMs:',
    },
    brands: {
        title: 'Brands that trust us'
    },
    common: {
        seeMore: 'See more'
    },
};
