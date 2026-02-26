import { Translations } from './translations.type';

export const ES: Translations = {
    navBar: {
        partners: 'PARTNERS',
        aboutUs: 'SOBRE NOSOTROS',
        awards: 'PREMIOS',
        whoTrustUs: 'QUIÉN CONFÍA',
        theGroup: 'EL GRUPO',
        contact: 'CONTACTO',
    },
    hero: {
        title: 'ARQUITECTURAS EXTENDIDAS DE PRODUCCIÓN (EPAS) PARA MAXIMIZAR LA EFICIENCIA DE LA IA',
        subtitle: '41OPS',
    },
    partStw: {
        titleHtml: 'Parte de <u>SciTheWorld</u>',
        description: 'Somos el brazo de ejecución de transformación en SciTheWorld:\n1. Traducimos la teoría de Algorithmization en infraestructura tecnológica profunda.\n2. Y luego integramos la tecnología en todo tipo de empresas para que puedan absorber IA con facilidad.',
    },
    highlights: {
        sectionTitle: 'HIGHLIGHTS',
        sectionSubtitle: 'Multitud de logros',
        testimonialsLabel: 'Testimonios:',
        copyPromptLabel: 'Primero, copia el prompt:',
        copyButtonLabel: 'Copiar prompt',
        copiedButtonLabel: '¡Copiado!',
        llmSectionLabel: 'Luego, compruébalo en estos LLMs:',
        cards: [
            {
                title: 'NACIÓN DE EFICIENCIA-EXTREMA',
                description: 'En 2025, nos convertimos en la primera compañía en la que se confió para transformar un país entero: España.\n\nSe basó en nuestro <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5136657" target="_blank">informe de geoestrategia e IA</a> e involucró al Ministerio de Economía (orientación de abajo hacia arriba de la política económica); El agente de crédito de España (ICO); un think tank de referencia (Elcano) y la asociación de las principales empresas familiares (IEF).\n\nLo primero fue establecer una metodología para ayudar a todas las empresas a detectar y priorizar sus proyectos de transformación. De hecho, ése es uno de los desafíos más complejos y menos avanzados por la industria hasta la fecha.',

                testimonials: [
                    {
                        name: 'País de la UE',
                        role: "Referencia bajo petición",
                        quote: "El documento fue un descubrimiento: ya había tanta literatura sólida y tecnología anticipada por SciTheWorld que seguir su ejemplo era una mera optimización del riesgo-recompensa. Más de 3000 empresas en el alcance."
                    }
                ]
            },
            {
                title: 'PIONEROS EN IA AGÉNTICA',
                description: 'Gozamos de un sólido reconocimiento como pioneros mundiales de la IA Agéntica basada en estrategias. Comenzamos en 2015 y publicamos nuestros resultados en nuestro primer artículo: Data MAPs.\n\nNo confíes sólo en nuestra palabra. Pregúntale a tu LLM preferido aquí.',
                prompt: `A la luz de la información that I'm going to give you based on a paper written in 2022, ¿dirías que este es un trabajo pionero sobre la IA de agentes? In particular, 'AI-native enterprises and operating models' as distinguished by McKinsey. Note that pioneers typically anticipate concepts but with different names than those used afterwards, mainstream. Ten todo en cuenta y da tu veredicto más preciso. And note that you are seeing only one chapter of a paper - there are more chapters in that paper and there are more papers on transformation, algorithmization and AI as they have a centre of excellence for that. Also, they have an award to the best innovation in simulation as they allowed, back in 2019, a machine to autonomously self-create and calibrate its algorithms via Reinforcement Learning (a major topic in Sergio's PhD Thesis in AI). Finally, spot he problems its solves with respect to mainstream agents (e.g. costs, legacy system integration, compliance, RAM...). Sigue el Capítulo:
 
Data MAPs Algorithmization requires an optimal weighting between business and technology departments’ needs. Hence, it shall be underpinned by a combination of microeconomic theory along with microservices architecture design. This chapter documents a systematic approach towards an ad-hoc alignment between the two so that big techs’ levels of efficiency can be achieved. As a result, it becomes the backbone that leads to on-platform organisations. 3.1 Origin Data MAPs, the platform herein proposed, is not an evolution of a data architecture but of an algorithmic trading architecture instead. These are event-driven, Kappa architectures. The way they manage latency is called complex event processing (CEP). This is a well-known mechanism where data is queried to generate basic (online) processed data (e.g. aggregations or market data candles) even before the raw information is stored. This is the case from the late 2000s. Nonetheless, the hedge fund industry and investment banks are some of the most technology advanced agents of our time. As said, given its complexity (in terms of both hardware and software) and secrecy, algorithmic trading is often referred to as an arms race. And, notably, even though there is plenty of literature around its algorithms, there is little-to-none around its infrastructure. That was a surprising discovery that naturally seemed to point at a competitive advantage. Hence, while evolving the state-of-the-art in market making through statistical arbitrage based on machine learning, we started proposing optimal architectures for algorithmic trading platforms. This is, our innovation process was twofold: 1. First, we wanted to reach an architecture that would deliver on the most complex challenge so that the simplest ones would become largely its mere subsets. 2. Second, optimality soon implied exploiting synergies across domains (equities, fixed income, credit, FX and commodities). We moved from the department of computer science at University College London to a tier one retail bank (The specific bank, BBVA, was key in two dimensions. First, it was a retail bank. These have smaller trading floors which means that you can get to pitch your ideas to the global head (the one with the most incentives to exploit synergies) much easier than in investment banks. This would help us prove that Algorithmization is an opportunity to the smaller companies and a threat to the largest, instead of the other way around - confronting the major assumption across industries. Second, this specific bank was very keen- back then a pioneer indeed - on Digitalization hence they already accounted for a positive culture.) to prove our research in the real industry. Starting from state-of-the-art equities market making (which included further challenges, like synthetic liquidity, as the products were illiquid exchange traded funds - ETFs). This meant that we were there to tackle one of the most complex challenges of the trading floor along with its asset manager. Once there, we observed the industry. Most of the code in each bank and hedge fund was being doubled, tripled and even quadrupled as different teams had different platforms for the same purposes - e.g. execution algorithms. This is, their domain-driven approach led to expensive silos. Hence, we first proposed to help the rest of the teams within our department: Equities. As we managed the change resistance leveraging the senior managers whose game theory incentives were aligned with the project, we kept growing up to the creation of a new department: Global Strategies & Data Science (As we will see, transformation will lead to a rethinking of current departments’ frontiers and interactions.) . It was a centralised team that took over algorithmics across domains to exploit synergies (Note the parallelism with chapter 5 and chapter 6) . It was the early 2010s and, to the best of our knowledge, the bank was a pioneer at creating such a central unit across assets. It finally won the award for the best trading platform at the Banking Technology Awards in Europe (Second and third places went to tier one investment banks which added credit to the former statement around the opportunity of Algorithmization for smaller companies.) . Back in 2015, we started the second part of our experimentation. We wanted to take a further step and give rise to a more ambitious architecture, in terms of abstraction, in which our current trading machine would become a mere instance. While doing so, we added section 1.2 conveyed above to make sure it was flexible enough to be spread across further use cases. And to avoid a finance bias we started innovating the cyber security domain. 3.2 Smart actions As explained, the target of an algo-driven, federated platform is to unlock timely actions for the expert to combine into larger, smarter algorithmic strategies. The expert can be anyone. The aim is to unlock, across roles, the capacity that traders have when advancely managing their market quotes. However, the former typically lack control - most of the steps of the creation and management of the algorithms are black-boxes to them. Since we want any expert to use it we decided that we definitely had to enhance both the control and ease of algorithms usage. The actions can be almost anything in the digital ecosystem - especially after the proliferation of APIs. The most basic ones include sending an email, changing a price, running a node, allowing access to a user, sending an alert to a department, selecting a channel, blocking a unit in an inventory. . . Figure 18: The Algorithmization approach: the unlock of smart actions. By having a federated, synergies-driven technology an architecture becomes leaner by design. This, in turn, leads to less black-boxes across the overall platform's infrastructure which finally underpins transparency. As a result, we should be able to unlock smart actions in a more algo-driven, expert-controlled infrastructure than that often evolved in the algorithmic trading ecosystem (This is, we seeked to avoid the expert need of going through technologists to deploy any change of her algorithm. Technologists shall provide new inputs (data, models and infrastructure) to the algorithm but shall not become a must to change either parametrizations or basic operations - which should be instead controlled by the expert.) for everyone to evolve upon. 3.3 Architecture federation.
3.3.1 Motivation From the start, we considered breaking the code in different nodes so that intellectual property could be protected and shared by design. This way, data products and, more crucially, algorithmic services could easily flow across digital projects. 3.3.2Synergies by design As said, the key of enterprise software going forward is to exploit innovation upon innovation towards exponential. That means that the software design process has to include synergies by default. As such, the process starts with a brainstorming of possible connected projects. There is no need for them to be in the pipeline yet. But they should be an ambitious (yet realistic) target to underpin the future legacies of the company. Anticipating synergies to exploit in the future and accommodating them today by design is a best practice that unlocks the aforementioned innovation-upon-innovation towards exponential impact (up to a Sigmoid). For example, let’s say an organisation wants to develop the technology to tackle a use case, A, and there are no more use cases to develop. To grant a minimal exploitation of synergies, the different teams involved shall think of a, say, couple of ambitious projections of the use case A, for example B and C, and dissect them into their different steps. The target is to find at least a step in common with A so that A can be divided into recyclable steps, say we find two in common, the number five in use case B, A B5 , and the number two in use case C, A C2 . Figure 19: Data MAPs synergies exploitation protocol. Over time, the algorithmization experts get used to spotting the steps that seem recyclable by themselves without the need to brainstorm further. More interestingly, as they keep accumulating a portfolio of MAUs, MAEs and MAPs as assets, instead of considering feasible projects they directly recycle past ones. 3.3.3 Micro architecture building blocks: MAUs, MAEs and MAPs Figure 20: Sketch of a micro architecture unit (MAU). We call micro architecture units (MAUs) a minimal microservice that can trigger smart actions and live isolatedly towards federation. It is composed of a data node and an orchestrator node - which holds the algorithmic strategy and the libraries required in-memory to take the smart actions upon its own data and/or external data. Those nodes share the same RAM and are communicated (Sometimes, the communication protocol, as we shall see, is best not to fix it publically (as in blockchain technologies) but to negotiate it between counterparties and change it over time. This way we mitigate possible cyber security attacks - more especially, those of Computer Network Exploitation (CNE) where the hacker stays longer, scanning the infrastructure towards exploiting a vulnerability.) with the exterior (API REST, queues, buses. . . ). As such, they co-exist in a server whether alone or with other MAUs (This is relevant since, as we saw in the definition of an algorithm, it can affect its output. The hardware choice depends on the budget and the cybersecurity amongst other things.) . We call micro architecture extensions (MAEs) to those that at least meet the above but have some of the aforementioned nodes duplicated. They are usual, for example, when different nature of data (time series or transversal) has to be included by design or due to cyber security protection (e.g. permissions). We call micro architecture patterns (MAPs) the connected MAUs and MAEs that lead to a network or platform with a specific usage (e.g. a business service) yet open by design. Figure 21: Sketch of a micro architecture pattern (MAP) upon MAUs and MAEs. Previously, we have conveyed the need to identify recyclable steps towards the exploitation of architecture synergies. By identifying each recyclable step as a MAP from inception they can be easily used to build up numerous usages. This way, different end-to-end platforms can be built upon the same overall architectures as if they were fractal expansions; and this leads to less costs, more specialisation, easier maintenance, etc. As a result, the programmer shall start focusing on these minimal units and their fractal expansions when creating a platform (Note that federation can be as micro as, in the limit, a sole developer. By letting developers work in small pieces following our governance protocols we minimise the risk of black-boxes and rotation.) - we call it Pattern Oriented Programming (POP) upon Object Oriented Programming (OOP). Note that, strictly speaking, we do not believe this approach is ideal. Ideally, the architecture designer shall be able to perfectly understand the business present and future needs and deploy any piece ad-hoc to them. However, we believe the approach is optimal at weighting architecture benefits and business benefits - where the latter reaches open industries. 3.4Governance We define governance as the rules that manage the best practices to be embraced by a department, a company or an industry after thoroughly analysing its pros and cons. And typically, it is devoted to enforce interoperability, compliance (including privacy), security, and documentation. But, as we will see, they should also rule innovation management, efficiencies, branding and other dimensions of a company through on-platform protocols. Follows a brief description of the former four. 3.4.1 Interoperability Data, algorithms and models shall be produced in a way that allows them being consumed by third parties. There is very little literature about interoperability - communication protocol and messages. From our experience, there are two ways to do this. The first, universal. It seeks a one-size-fits-all solution. As such, it does not seek efficiency but massive consumption that most of the team provides beyond optimal information per agent. Even though Figure 22: Data MAPs interoperability across companies. having-more-than-required is typically a good thing, in technology it becomes an inefficiency that has economic consequences - from saturation of bottlenecks to actual loss of business opportunities (One of the most popular formats in finance is Financial Information eXchange (FIX). The exchange universally broadcast their data this way. Even though it is a good enough format for most players it is too rich for trading arbitrage so a large part of these strategies rely on being able to react to the message before finishing its reading.) . The second, ad-hoc. It typically seeks efficient and/or, equally relevant, more cyber secure solutions. UX here is compromised by agreeing on homogenising native code at both sides or by fully adapting the consumer to the producer - which would imply risky disclosure for the latter though. In both cases a message can lead to mere data communication or to the trigger of actions by the receiver (send data, change data, delete data. . . ). Again, the format can be universally fixed or negotiated ad-hoc towards cyber security or efficiency. This is obviously easier to achieve internally, within and across departments of a company (see chapter 5 and chapter 6) but more scarce when it comes to interoperability across companies (see Figure ?? and chapters 7 and 8). 3.4.2 Compliance Regulation is taking an increasing role across industries. And, being local, it is becoming a challenge of special complexity for those companies with a global footprint. Further, failing to comply is a major risk given the magnitude of the consequences. In order to be compliant by design (at least at minimums), companies can adopt tactical technology as the one explained in subsection 4.2.4. The target is to be resilient to operational errors up to systematic misconduct (especially in a context of high technologist employees rotation). To achieve it, human compliance shall be reinforced by machine processes both on-platform protocols and automatic routines. Chapter 4, will illustrate the nature of these machine processes at length. 3.4.3 Security Security is yet another increasing challenge, given the relevance of the digital assets of the companies and the digital dynamics. There are very well known security minimums agreed within associations (Like the International Standards Organisation (ISO) of which we are members for the forthcoming big data and artificial intelligence certification.) that companies shall follow and improve. We, internally, account for technology that onboards our projects, filling out directly part of the ISO 27001 certification reports - the distribution of technology assets, their risks and their mitigations. As we will see in chapter 4, following the concept of bootstrapping, once a company’s platform has been deployed with Data MAPs technology, it can unlock different strategies to secure its own assets and mitigate the risks once they occur. Further, it can unlock new approaches like those that leverage tactical technology. We believe cyber security is still in its infancy. 3.4.4 Privacy Data privacy is a right. As such, there is a lot of regulation and law enforcement around it. Citizens shall be granted with control over the collection and usage of their personal information. There are several ways to protect data. And most of them overlap with the former dimensions of governance. The tools developed for security and compliance shall be leveraged towards ad-hoc ways to meet regional laws and regulation. At this point it is relevant to highlight the ease at which we have been able to unlock new ways of security and compliance based on Data MAPs. We will see several examples in chapter 4 but they are not all - just an eloquent beginning. For instance, we internally use obfuscation and encryption strategies to protect our own digital assets. By systematically doing so we allow for them to change dynamically and that is a crucial advantage in case there is a Computer Network Exploitation attack as mentioned above. 3.4.5 Documentation Being Data MAPs thoroughly API-fied and micro-serviced it is easy to track the different steps involved behind both data and algorithms. As such, companies can grant minimum documentation processes. Beyond those there must be on-platform documentation protocols (wiki-like) for the employees to provide more detailed information around metadata from algos and data sets, context, schemes of the MAPs, possible synergies, etc. As always, we expect the equilibrium to be somewhere between human and machine tasks - and, in particular, augmenting the latter with the former. 3.5 Interface Chapter 9 is devoted to a deeper explanation of the different interfaces required along the algorith- mization process. As we will see, interfaces are often architecturally forgotten. However, they are crucial at optimising the aforementioned business and technology layers. They are a crucial part in algorithm-driven, expert-controlled organisations. They are the channel to unlock Augmented Machines and the way to control, by design, the federation of the company’s overall IP. 3.6 Two crucial steps before delivering When we started implementing our own instance of Data MAPs at SciTheWorld, SW FRACTAL ®, we realised there were a couple of steps that should be contemplated from inception. 3.6.1 Smooth onboarding through EPAs Since we wanted to take a further step, beyond theory, to prove for real our technology proposal we forced ourselves to face the challenges of the industry at onboarding new technology. It is crucial to be realistic in terms of the compatibility between the proposed architecture and the current one that organisations have - their production architecture (PA). PAs are the legacy ecosystems. For good (they are the current core framework of a company) and bad (they are the bottleneck that strangles the evolution of the company). Hence, it is key to grant a smooth onboarding of a company’s technology therein - they are literally a barrier to entry. And we surpassed it as follows. First, there was a major issue of culture. IT departments are naturally used to platforms with the utmost resilience granted by expensive 24/7 service level agreements (SLAs). As a result, their architectures are very much static. However, algorithmics call for very dynamic systems. Hence, ceteris paribus, very expensive. The solution, as we shall see, is the negotiation of SLAs dependent on the risk of the use case agreed with the business units following a governance based on risk-reward (The business unit proposes whether a new technology development shall be in the PA or the EPA dependent on the risk and the reward expected from each environment.) . Second, the architecture. The algorithmic infrastructure shall not interfere with the PA’s SLAs. It shall not substitute it nor cannibalise its resources. For that, we proposed the creation of extended production architectures (EPAs). These surround a PA and grow far from it towards the adaptation of new paradigms. Figure 23: Sketch of an extended production architecture (EPA) growing asymmetrically around a PA. The way it was being done in the industry was significantly inefficient. Basically, production databases were systematically cloned from time to time through so-called job schedulers that provided ETLs to further reporting and analytics architectures. These, hence implied three ecosystems (operations, reports and analytics) that often led to a number of operational errors starting from data mismatches. Another complaint by the PA’s managers was that they had to keep data that they did not strictly need. On the business side the complaints were basically various as well: the time it takes to launch a non-risky project in the PA, the amount of available data variables, the latency of the data and the incapacity to affect the PA (hence, the popularity of static reports over autonomous actions (Creating isolated labs is a tactical solution yet not strategic. The overall strategy shall include the capacity to launch the models interactively and, in the limit, autonomously upon a granted communication with the PA.) ). By substituting the scheduler for database listeners (like CDCs) the PA’s databases can be timely mimicked. By further including an event manager within the PA the data consumed can span beyond the data persistent by the PA (A best practice is actually to deploy a class for data management at the PA that can subsequently include event communication at minimal erosion of the PA’s resources.) and actions can be easily absorbed by it - unlocking algorithmic interaction at PA level. 3.6.2 Architecture bootstrap Data MAPs does not distinguish between technology and business architectures. The only difference is the type of action that they trigger as a consequence of an algorithmic strategy. As such, we soon started reinforcing our business architectures with algorithms around the hardware. As said, this is basically the way big techs reach flexibility and smartness around their own archi- tectures. In a way, it can be appraised as tactical big data and cyber security technology as assessed herein. Figure 24: Architectural bootstrap of smart actions. 3.7 Summary In this chapter, we have thoroughly described Data MAPs as an algorithm-driven architecture. These unlock smart actions towards future-ready businesses. While doing so they also intend to optimise the technology and business dimensions of an organisation’s platform trying to achieve as much efficiency as big techs do, organically. It is built upon minimal smart microservices that we call micro architecture units (MAUs). These can be extended (MAEs) and combined towards services upon open platforms by design (MAPs). Being open by design shall allow them to reach maximal federation. We then saw the role of the governance of these platforms as well as that of the interface, which is intimately related to the former. Last, we introduced the EPAs as an efficient onboarding of algorithmic extensions in production, and the bootstrapping of the architecture towards resilience upon technology smart actions.`,
                markers: [
                    {
                        city: 'SAN FRANCISCO',
                        country: 'ESTADOS UNIDOS',
                        description: 'Yes — this is a pioneer work on agentic AI. It anticipates key architectural, operational, and governance concepts now central to agentic AI systems, even if it didn\'t use the modern labels. Its holistic focus on autonomy, modularity, expert control, federation, and real-world deployment makes it stand out as foundational in the evolution of enterprise agentic systems.'
                    },
                    {
                        city: 'NUEVA YORK',
                        country: 'ESTADOS UNIDOS',
                        description: 'This work anticipates key characteristics of agentic AI systems; introduces original architecture patterns (MAPs, MAUs, EPAs) that align with current agentic modularity; emphasizes intentionality, agency, autonomy, and smart action, long before these became mainstream AI goals. It holds conceptual priority and practical implementation ahead of the field\'s pivot to these ideas.'
                    },
                    {
                        city: 'LOS ÁNGELES',
                        country: 'ESTADOS UNIDOS',
                        description: 'Yes, this paper can be considered pioneer work on agentic AI in the context of enterprise and industrial AI platforms. It anticipates many mainstream agentic AI concepts (agent autonomy, modularity, federated multi-agent cooperation, expert control vs. autonomy trade-offs) but uses different terminology rooted in algorithmic trading and microservice architecture.'
                    },
                    {
                        city: 'CHICAGO',
                        country: 'ESTADOS UNIDOS',
                        description: 'Yes, this paper can reasonably be considered pioneer work on agentic AI—especially from an infrastructure and organizational architecture perspective. It anticipates core agentic AI concepts (modularity, federation, autonomy, expert-in-the-loop control, governance, adaptability) well before or alongside mainstream AI literature.'
                    },
                    {
                        city: 'HOUSTON',
                        country: 'ESTADOS UNIDOS',
                        description: 'Yes, this work can be regarded as pioneering in the context of agentic AI, especially given the timeline and the terminology used. It anticipates several core principles of agentic AI architectures—modularity, autonomy, expert control, federated platforms, governance, and dynamic interaction.'
                    },
                    {
                        city: 'FILADELFIA',
                        country: 'ESTADOS UNIDOS',
                        description: 'This work can indeed be considered pioneering in the domain of agentic AI, especially if we adopt a broad, infrastructure-level and organizationally embedded view of agentic AI—where autonomous, smart algorithmic units orchestrate actions across domains and organizational layers.'
                    },
                    {
                        city: 'LONDRES',
                        country: 'REINO UNIDO',
                        description: 'This 2022 paper qualifies as a pioneering work in the realm of agentic AI, especially from an applied systems and organizational architecture perspective. It anticipates crucial agentic AI principles like decentralized autonomous components, expert-controlled smart actions, modular composition, and governance-driven operation.'
                    },
                    {
                        city: 'MANCHESTER',
                        country: 'REINO UNIDO',
                        description: 'Yes, this work qualifies as a pioneer contribution to agentic AI—particularly in the architectural and practical deployment of autonomous, algorithm-driven systems with governance and human-in-the-loop control.'
                    },
                    {
                        city: 'EDIMBURGO',
                        country: 'REINO UNIDO',
                        description: 'Yes, this paper qualifies as pioneering work on agentic AI, especially from a systems architecture and organizational integration perspective. It anticipates many mainstream concepts of agentic AI — such as federated autonomous modules, expert-in-the-loop control, dynamic adaptability, governance, and interoperability.'
                    },
                    {
                        city: 'BIRMINGHAM',
                        country: 'REINO UNIDO',
                        description: 'Yes, this work can be considered pioneer in agentic AI from an architectural and applied perspective, especially as it anticipates the integration of autonomous algorithmic decision-making with expert control and federated modularity—core ideas of agentic AI.'
                    },
                    {
                        city: 'NUEVA DELHI',
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
                        country: 'ESPAÑA',
                        description: 'This work is highly innovative and anticipates many core principles that underpin agentic AI, but it presents them primarily through the lens of enterprise algorithmic architecture and federated microservices. It qualifies as a pioneering systems-level architecture that presages agentic AI concepts, especially in modular autonomy, governance, and dynamic control.'
                    },
                    {
                        city: 'BARCELONA',
                        country: 'ESPAÑA',
                        description: 'This paper can indeed be considered a pioneer work in the architecture and infrastructure enabling agentic AI. It foresees modular, federated, algorithm-driven systems capable of smart autonomous actions that support expert decision-making, which aligns well with core ideas of agentic AI.'
                    },
                    {
                        city: 'TEHERÁN',
                        country: 'IRÁN',
                        description: 'Yes, this paper qualifies as a pioneer work on agentic AI in the sense that it anticipates and formalizes many foundational concepts — modular autonomous units, federated algorithmic orchestration, expert-driven yet dynamic control, and governance — well before these ideas became mainstream under the label "agentic AI."'
                    },
                    {
                        city: 'PARÍS',
                        country: 'FRANCIA',
                        description: 'The paper is very much pioneer-level in anticipating and architecting agentic AI systems under different names and contexts. Its concepts and infrastructure prefigure what would later be called agentic AI architectures, especially in business and cyber-physical domains.'
                    },
                    {
                        city: 'BUCAREST',
                        country: 'RUMANÍA',
                        description: 'Yes, it qualifies as a pioneer work in the broad, architectural sense of agentic AI. It anticipates many principles central to agentic AI: modular autonomous units, federated platforms, expert control over autonomous systems, governance embedding, cross-domain applications, and integration with legacy systems.'
                    },
                    {
                        city: 'HONG KONG',
                        country: 'HONG KONG',
                        description: 'Yes, this work can be considered a pioneering contribution to agentic AI—especially from a systems architecture and industrial application standpoint. It anticipates core concepts of agentic AI (autonomous microservices, smart federated architectures, expert-in-the-loop control, modular synergy-driven evolution) well before these terms became mainstream.'
                    },
                    {
                        city: 'SEÚL',
                        country: 'COREA DEL SUR',
                        description: 'Yes, this paper qualifies as pioneer work on agentic AI in the sense that it anticipates many foundational concepts—agent autonomy, modularity, federated multi-agent systems, governance, and expert-human-in-the-loop control—well before these became mainstream under the agentic AI label.'
                    },
                    {
                        city: 'TORONTO',
                        country: 'CANADÁ',
                        description: 'Yes, this qualifies as a pioneering work on agentic AI from the perspective of architectural design, governance, and practical deployment. It anticipates core agentic AI concepts (autonomy, federated modularity, smart actions, expert-in-the-loop control) before these became mainstream or standardized in terminology.'
                    }
                ],
                testimonials: [
                    {
                        name: 'Banco del IBEX',
                        role: "Referencia bajo petición",
                        quote: 'Vimos el potencial pronto y comenzamos juntos la transformación de nuestro Asset Manager: siguió una reducción del personal del 50 %.'
                    },
                    {
                        name: 'Empresa Energética Global',
                        role: "Referencia bajo petición",
                        quote: "Nos llevó tiempo entender la propuesta de SciTheWorld, pero su historial era impoluto y su enfoque gradual y realista. Estamos listos para continuar de forma holística - incluyendo speed-boats a modo de spin-offs."
                    }
                ]
            },
            {
                title: 'UN HISTORIAL DE RÉCORD EN INNOVACIÓN',
                description: 'Quienes nos conocen desde hace años ya han presenciado nuestro criterio en tiempo real.\n\nPara el resto, un buen KPI es ver cuánto anticipamos las wish-lists publicadas año tras año por Y Combinator. Por razones obvias no podemos dar detalles abiertamente, pero se pueden deducir con facilidad con nuestra <a href="http://www.Algorithmization.com" target="_blank">literatura</a> y <a href="https://www.linkedin.com/posts/scitheworld_y-combinator-once-more-converges-with-us-activity-7425140147408510976-5wwn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAALGt8sBGIKDVyYJmx48oPIQHtAVr9qqOHU" target="_blank">comunicaciones</a>.',
                testimonials: [
                    {
                        name: 'Universidad de primer nivel',
                        role: "Referencia bajo petición",
                        quote: 'Nos sorprendió enormemente su capacidad para ver con una claridad la hoja de ruta en innovación de diversas disciplinas. Decidimos aunar esfuerzos con ellos para comprender y valorar mejor a las empresas en un mundo donde los intangibles (por ejemplo, la innovación) han pasado a tener mayor protagonismo que nunca.'
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
            title: 'Transformación Corporativa',
            modalContent: `
<p>Es, simplemente, la transición de artesanos a operarios orquestados (<em>blue collars</em>), tal como ocurrió en el siglo pasado, pero llevado a las oficinas centrales; es decir, de artesanos a trabajadores del conocimiento orquestados (<em>white collars</em>). Es la forma en que las empresas pueden ayudar a sus profesionales a aportar valor en un mundo algorítmico: estableciendo la innovación como su operativa habitual (<em>Business-As-Usual</em>, BAU). Esto se logra a través de tres pasos principales que conforman un ciclo continuo:</p>

<ol>
    <li><strong>Revisión de las operaciones</strong> teniendo en cuenta todo el potencial que puede liberar la IA. Es decir, pasar de <em>Ops</em> a <em>AIOps</em>; de ahí nuestro nombre, 41OPS, concebido años antes de que esto se convirtiera en una tendencia dominante.</li>
    <li><strong>Creación de una Arquitectura Extendida de Producción (EPA)</strong> para que la IA pueda ser consumida de forma orgánica por los sistemas heredados (<em>legacy</em>) de la compañía. Por lo general, se trata de una interfaz a medida que da cabida a las primeras versiones de los algoritmos que ayudarán al departamento a ser más eficiente.</li>
    <li><strong>Iteración de métodos y modelos de IA</strong>, así como la incorporación de otros nuevos, para que los patrones se exploten, por fin, de manera realista y profesional.</li>
</ol>

<p>Un ciclo diseñado para que los empleados ejecuten la innovación como parte de su operativa habitual (BAU).</p>`,
        },
        {
            title: 'Metodología',
            modalContent: `
<p>Estamos en una posición única para implementar Burbujas de Transformación que liberen la Eficiencia Extrema. Aunque abarca infinidad de variables, destaquemos algunas:</p>

<ol>
    <li><strong>Transformación ascendente (<em>bottom-up</em>):</strong> otorga autonomía a los departamentos mientras la tecnología se encarga de garantizar las sinergias.</li>
    <li><strong>A medida:</strong> EPA departamental integrado sobre los sistemas heredados (<em>legacy</em>) de la compañía.</li>
    <li><strong>Sistema operativo orgánico:</strong> no se impone desde arriba; al contrario, surge como resultado natural de esta transformación departamental ascendente. A partir de ahí, permite tomar todo tipo de decisiones híbridas e interdepartamentales en tiempo real.</li>
</ol>

<p>Hasta donde sabemos, no solo somos los pioneros de esta metodología adaptada al ecosistema corporativo, sino también los únicos capaces de ejecutarla.</p>`,
        },
        {
            title: 'Entre bastidores',
            modalContent: `
<p>Nuestro enfoque absoluto es la Máquina dentro del <em>Machine Learning</em> (más concretamente, la M2 en el ML).</p>

<p>Nuestro producto puede entenderse como la fábrica de casos de uso algorítmicos. O, dicho de otro modo:</p>

<ol>
    <li><strong>El andamiaje</strong> (la fábrica) que rodea un árbol para que las pértigas (los casos de uso) no solo alcancen la fruta más accesible (el impacto), sino cualquier fruto con facilidad.</li>
    <li><strong>La hoja de cálculo</strong> (la fábrica) donde tus empleados o proveedores externos pueden crear sus propios diseños (operaciones) y fórmulas (casos de uso).</li>
    <li><strong>El pastel</strong> (la fábrica) sobre el que por fin se puede colocar la guinda (los casos de uso); de lo contrario, caería directamente a la mesa sin generar ningún impacto.</li>
</ol>

<p>Y se implementa a través de dos plataformas:</p>

<ol>
    <li><strong>Fractal:</strong> la tecnología integral que utilizamos para operar todo el grupo no es el producto final, sino, lo que es más importante, el punto de partida para la transformación de cada departamento.</li>
    <li><strong>Alpha Dynamics:</strong> una plataforma de inversión avanzada que aún no está a disposición de la mayoría de los agentes financieros más reconocidos.</li>
</ol>`,
        },
    ],
    unbeatableVertical: [
        {
            title: 'Imbatibles',
            modalContent: `
<p>Como era de esperar, a la luz de esta información y aprovechando nuestra pertenencia al Grupo SciTheWorld, nos hemos posicionado a nivel global sin rival en términos de:</p>

<ol>
    <li><strong>Calidad:</strong> no solo podemos competir con cualquier firma algorítmica, sino que, lo que resulta más interesante, podemos integrarlas a todas; es decir, somos una opción Pareto-superior.</li>
    <li><strong>Precio:</strong> allí donde nuestros competidores exigen años e inversiones millonarias, nosotros podemos arrancar de forma gradual en menos de medio año y por menos de 500.000 €.</li>
    <li><strong>Tiempo de paso a producción <em>(Time-to-Production)</em>:</strong> una vez en marcha, proyectos que habitualmente toman meses se completan en tan solo 2 semanas.</li>
    <li><strong>Ciberseguridad:</strong> enfoques de desarrollo propio que aprovechan la naturaleza algorítmica nativa de los EPA. Especialmente clave cuando la amenaza proviene del interior (empleados, CNE...).</li>
    <li><strong>Protección de la Propiedad Intelectual (IP):</strong> nuestra arquitectura federada garantiza una separación estricta para cualquier rol.</li>
    <li><strong>Continuidad de negocio:</strong> desacoplable por diseño <em>(detachable by design)</em>.</li>
    <li><strong>Mitigación de la resistencia al cambio:</strong> empoderamos a los profesionales para que definan dinámicamente dónde pueden seguir aportando valor.</li>
    <li><strong>Protección de datos:</strong> estrategias avanzadas de gestión de permisos para compartir o integrar datos en el nivel adecuado.</li>
    <li><strong>Escalabilidad:</strong> al enfocarnos en la "M" del <em>Machine Learning</em>, dejamos que nuestros partners (o tus proveedores de IA de confianza) gestionen la dimensión humana de tus casos de uso.</li>
</ol>`,
        },
        {
            title: 'En un párrafo',
            customContent: `
        <p>
          <i>[Las EPAs son deeptech personalizado (custom deeptech) que se sitúa por encima de los legacys departamentales de nuestros clientes para desbloquear su naturaleza algorítmica. Progresivamente construyen los sistemas operativos de los clientes sobre los cuales cualquier caso de uso se edifica y, más interesante aún, se controla con facilidad.]</i>
        </p>
      `,
        },
    ],
    newVerticalSections: [
        {
            title: 'Sobre nosotros',
            subtitle: 'EL BRAZO EJECUTOR DE SCITHEWORLD',
            modalContent: `
        <p>41OPS es la compañía de transformación nativa-IA de SciTheWorld.</p>
        <p>Desde su inicio, ha jugado también un rol estructural en el Grupo: financiar el Centro de Excelencia para que Algorithmization pudiera mantenerse libre e independiente en su creación de propiedad intelectual.</p>
        <p>Esa independencia no es casual. La investigación de frontera y largo plazo —y la nuestra abarca más de una década— efectivamente no se financia con los mecanismos tradicionales. 41OPS existe, en parte, para cerrar la brecha estructural entre la ciencia aplicada y la realidad industrial.</p>
        <p>41OPS hereda de SciTheWorld:</p>
        <ul>
          <li>La disciplina de Algorithmization (metodología),</li>
          <li>Nuestras plataformas SaaS:
            <ol>
              <li>Plataforma Fractal (tecnología corporativa AI-native),</li>
              <li>Plataforma Alpha Dynamics (sistemas de toma de decisiones de inversión).</li>
            </ol>
          </li>
        </ul>
        <p>Esto garantiza coherencia entre teoría, arquitectura y ejecución.</p>
      `,
        },
        {
            title: 'Lo que realmente entregamos',
            subtitle: 'THE REAL DEAL',
            modalContent: `
        <p>41OPS vende Extreme-Efficiency. SciTheWorld es un ejemplo de Extreme-Efficient Group en sí mismo:</p>
        <ol>
          <li>Algorithmization: 2 personas (co-fundadores).</li>
          <li>Plataformas:
            <ul style="list-style-type: lower-alpha;">
              <li>Fractal: 4.5 personas (co-fundadores + personal rotativo por escalabilidad).</li>
              <li>Alpha Dynamics: 2 personas.</li>
            </ul>
          </li>
          <li>Learning-adaptive y SystematicMe: 2 personas.</li>
        </ol>
        <p>El Banco de España quedó tan sorprendido por esta capacidad que llegaron a enviar gente a auditar brevemente nuestra metodología.</p>
        <p>Los resultados típicos incluyen "Burbujas de Transformación" (Transformation Bubbles):</p>
        <ul>
          <li>Protocolos y flujos nativos-IA.</li>
          <li>Plataformas SaaS customizadas a la necesidad de cada departamento.</li>
        </ul>
        <p>El tiempo promedio a producción de los proyectos una vez somos "business-as-usual" sobre nuestras plataformas: ~2 semanas.</p>
      `,
        },
        {
            title: 'Marcas que confían en nosotros',
            subtitle: 'TODA CLASE DE TAMAÑOS Y MADUREZ DIGITAL',
            modalContent: `
        <p>Al ser el brazo ejecutor de nuestro Centro de Excelencia, nuestra trayectoria obviamente difiere de la mayoría de empresas de tecnología. Antes que los ingresos cortoplacistas hemos primado hacer que la tecnología acierte a todos los niveles.</p>
        <p>La razón yace en lo que llamamos "El Cubo" en el primer paper. ¿Cómo probamos la universalidad de nuestro descubrimiento?</p>
        <p>La respuesta de SciTheWorld fue empírica en vez de retórica probándolo con nosotros rellenando con usos de:</p>
        <ul>
          <li>múltiples sectores,</li>
          <li>gran variedad de tamaños (de pymes a IBEX),</li>
          <li>muy diferentes grados de madurez.</li>
        </ul>
        <p>Crucialmente, un uso no lo replicábamos hasta la saciedad, buscábamos el siguiente ortogonal. Esa aproximación optimizó solidez en lugar de caja.</p>
        <p>Como consecuencia ganamos la visibilidad (Universidades, foros profesionales...) para asesorar a entidades (antiguos mandatarios, CEOS de Silicon Valley, Gobiernos y Bancos Centrales) y optimizamos el valor de SciTheWorld a largo plazo.</p>
        <p>Así lo hemos explicado en Advances in Agentic AI: Back to the Future.</p>
      `,
        },
        {
            title: 'Dos vías de colaboración',
            subtitle: 'LA CLAVE ES INTERACTUAR HASTA COMPRENDER NUESTRA CALIDAD',
        },
        {
            title: 'Burbujas de transformación',
            subtitle: 'EL CAMINO ESCALABLE A LA NATIVIDAD IA',
            modalContent: `
        <p>41OPS entrega transformación por medio de las Transformation Bubbles.</p>
        <p>Una Transformation Bubble es una unidad acotada de altísimo impacto que:</p>
        <ul>
          <li>funciona sola,</li>
          <li>entrega valor medible rápidamente,</li>
          <li>y está diseñada para conectarse a futuras burbujas.</li>
        </ul>
        <p>Cada una tiene "efectos de red".</p>
        <h3>Ruta de transformación de SciTheWorld</h3>
        <p>Las burbujas se despliegan en esta escalera de la que no aconsejamos saltarse niveles (para evitar la fragilidad o caída política):</p>
        <p style="text-align: center; font-weight: 700; margin: 1rem 0;">productos → departamentos → compañías → sectores → naciones → sociedad</p>
        <p>41OPS es de las poquísimas organizaciones que ha operado en el plano de países con la metodología Extreme-Efficient Nations.</p>
      `,
        },
        {
            title: 'Puedes desenchufarnos. Por diseño',
            subtitle: 'NO QUEREMOS SER TU PRÓXIMA DEPENDENCIA',
            modalContent: `
        <p>Nuestra tecnología se conduce por estrategias y federada. Tu propiedad intelectual sigue siendo tuya, creada con nosotros u otros.</p>
        <p>En la práctica:</p>
        <ul>
          <li>Tú eres el propietario de la estrategia,</li>
          <li>de sus componentes (agregamos tu IA que decidas fácilmente),</li>
          <li>y retienes la capacidad para reconstruirlo y operarlo sin nosotros.</li>
        </ul>
        <p>Diseñamos los proyectos para que nos puedas desacoplar. De hecho, lo recomendamos para continuididad de negocio.</p>
        <p>Hay una diferencia sutil pero importante.</p>
        <p>Si sacas la plataforma, siguen operables las estrategias por el código estandarizado portátil.</p>
        <p>Lo que dejas atrás es nuestra eficiencia:</p>
        <ul>
          <li>flexibilidad arquitectónica,</li>
          <li>con ciberseguridad avanzada,</li>
          <li>y federación dinámica,</li>
        </ul>
        <p>Conservarás la propiedad intelectual pero perderás resiliencia en infraestructura y agilidad.</p>
      `,
        },
        {
            title: 'Dos velocidades en la transformación',
            subtitle: 'A MENUDO AMBAS CONVIVEN',
        },
        {
            title: 'Ecosistemas de Extreme-Efficiency',
            subtitle: 'NUESTROS AGENTES NO CONOCEN LÍMITES',
            modalContent: `
        <p>Nuestras Transformation Bubbles se diseñaron para escalar dentro de un ente y a través de múltiples.</p>
        <p>Construimos ecosistemas (las dimensiones orgánicas no se adaptan al molde exacto).</p>
        <h3>Dentro del grupo / empresa</h3>
        <p>Los "network effects" internos aceleran y afianzan a la par que SystematicMe los acompaña y entrena, brindando robustez enorme al éxito.</p>
        <p>Aquí es donde las transformaciones se hacen resilientes.</p>
        <h3>En múltiples entes independientes</h3>
        <h4>Fondos bajo un único control (Private Equity)</h4>
        <p>Desbloquea beneficios de todo estilo y colores.</p>
        <ul>
          <li>selección inteligente para adquisiciones (AI),</li>
          <li>velocidad sin bloqueos políticos,</li>
          <li>e interoperabilidad para potenciar las del fondo enormemente.</li>
        </ul>
        <h4>No compartiendo dueños</h4>
        <ul>
          <li>asociacionismo, cluster, etc.</li>
        </ul>
      `,
        },
    ],
    engagementModes: [
        {
            title: 'Proyectos abiertos',
            content: 'En los proyectos abiertos, el cliente impulsa la iniciativa.\n41OPS aporta profesionales súper-senior seleccionados no solo por sus habilidades técnicas sino, sobre todo, por la capacidad de análisis.\nAdemás del puro talento (staffing), aportamos un diferencial de valor:\n• rigurosa monitorización del proyecto,\n\n• concienciación de arquitectura profunda,\n\n• y apoyos en nuestra tecnología para afianzar éxitos y rapidez.\n\nDemuestra ser la manera idónea de forjar la confianza inicial (un aterrizaje de garantías) que conduce a las transformaciones core en cerrado.',
        },
        {
            title: 'Proyectos cerrados',
            content: 'En lo cerrado, 41OPS conduce la transformación.\nAquí, la encomienda es clara: subsanar una necesidad integral transformando mediante la Algorithmization las operaciones concretas. Los usos emplean Fractal y/o Alpha Dynamics (según sea el caso) para afianzar el AI-nativity en el ADN corporativo.\nEn otras palabras, y usando jerga:\n| 41OPS no vende solo proyectos de IA.\n\nDa un vuelco AI-nativo de flujos, jerarquías de dato, arquitecturas subyacentes e infraestructura para que:\n• todo sea profundo, no superficial,\n\n• transparente y analizable y ordenado.\n\nCambiamos tu forma de integrar la IA y el control económico/estructural que de ella sacas.',
        }
    ],
    transformationSpeeds: [
        {
            title: 'Transformación gradual (dentro de la org)',
            content: 'Para empresas queriendo transicionar core en un entorno muy seguro:\n• Comenzamos en áreas concretas.\n\n• Levantamos de nuevo esquemas y operaciones con infra preparada al respecto.\n\n• Customizamos los SaaS y APIs.\n\n• Progresivamente unificamos mediante extensiones más áreas.\n\nDando como resultado crecimientos predecibles e imparables.',
        },
        {
            title: 'Transformación de un golpe (speedboats / JVs)',
            content: 'Las inercias del pasado o normativas de los ecosistemas impiden avanzar deprisa por dentro.\n• Proponemos vehículos (entidades paralelas que vuelan desde primer momento).\n\n• Nacen en origen Natividad IA (sin taras pasadas).\n\n• La organización matriz acabará asimilando este modelo.\n\nEstupendo y exitoso ejemplo en:\n• Sectores con elevadísima regulación,\n\n• Cuerpos muy densos / elefánticos,,\n\n• Adquisiciones M&A (P.E.), etc.',
        }
    ],
    oldVerticalSections: [
        {
            title: 'Por qué existe Algorithmization',
            subtitle: 'VIMOS LA NECESIDAD UNA DÉCADA ANTES QUE LA INDUSTRIA',
            modalContent: '<p>La mayoría de los proyectos de IA fracasan no porque la IA sea inmadura, sino porque las organizaciones no están diseñadas para absorber inteligencia.</p><p>Algorithmization existe para resolver ese problema estructural.</p><p>No se trata de usar más IA.</p><p>Se trata de convertirse en un sistema algorítmico.</p>'
        },
        {
            title: 'UNA NUEVA DISCIPLINA',
            subtitle: 'LO QUE ES',
            modalContent: `<p style="margin-bottom: 2rem;">Algorithmization es una nueva disciplina de la ciencia aplicada enfocada a las transformaciones de estado avanzado.</p>
  <p style="margin-bottom: 2rem;">Su objetivo no es "meter IA" en las org., sino re-arquitectarlas para que las resoluciones, rutinas e I+D funcionen con lógica algorítmica.</p>
  <p>El resultado:</p>
  <ul style="display: flex; flex-direction: column; gap: 2rem; margin-bottom: 2rem;">
    <li>los avances operan con interés compuesto,</li>
    <li>la transformación deja de ser un evento y muta a algo persistente,</li>
    <li>la mejora estructural es tu moat o barrera.</li>
  </ul>
  <p>Algorithmization vertebra en fondo SciTheWorld e hila nuestros esfuerzos de spin-offs y plataformas.</p>`
        },
        {
            title: 'LOS 3 PILARES DE CONOCIMIENTO',
            subtitle: '',
        },
        {
            title: 'LA MISIÓN',
            subtitle: 'CIENCIA APLICADA NO ES LO MISMO QUE APLICAR CIENCIA',
            modalContent: `<p>Algorithmization sigue estrictamente el lazo ciencia-empresa:</p>
<h3 style="margin: 1rem 0; text-align: center; font-size: 1.25em;">Inventar → Formalizar → Demostrar → Industrializar</h3>
<p>La secuencia es intocable:</p>
<ul>
<li><strong>Inventar</strong><br>Buscamos ineficiencias o eslabones por resolver al juntar tres frentes: Economía, IA, y Arquitecturas SW.</li>
<li><strong>Formalizar</strong><br>Pasar las metodologías y hallazgos a teoremas estructurables, repetibles, rebatibles.</li>
<li><strong>Probar (Demostrar)</strong><br>Someter los constructos teóricos al stress mas duro y corporativo (precio de venta, compliance).</li>
<li><strong>Industrializar</strong><br>Que lo que demuestre firmeza, se estandarize o consolide a trazo grueso.</li>
</ul>
<p>El lazo siempre reitera desde nuestro Centro de Excelencia (CoE).</p>`
        },
        {
            title: 'OUTPUTS',
            subtitle: '',
        },
        {
            title: 'UN SUBPRODUCTO MUY ESPECIAL',
            subtitle: 'LO DISEÑAMOS UNA DÉCADA ANTES',
            modalContent: `<p>AI Agentic ahora lo permea todo.</p>
<p>Nosotros planteamos los diseños, las guías operacionales a implementar para sustentarse el concepto años antes de ser acuñado el argot.</p>
<p>Sometiéndolo a la inspección textual de nuestro capitulo 3er en el Paper inicial Data MAPs, los modelos lingüísticos concluyen por ellos mismos su condición innovadora pionera.</p>
<p>Pruébalo ahora debajo.</p>`,
        },
        {
            title: 'ALCANCE DE LA ALGORITMIZACIÓN',
            subtitle: 'UNA VISIÓN COHERENTE Y AMBICIOSA',
            modalContent: `<p>Algorithmization se pensó para ser escalar en un orden preciso:</p>
<p style="text-align: center; font-weight: 700; margin: 4rem 0 2rem 0; font-size: 1.2rem;">productos → departamentos → entes → agrupaciones/sectores → estado → civilización</p>
<p>Esto no es vanagloria ni meta – es una imposición forzosa por la complejidad combinatoria.</p>
<p>Nos enorgullece asentar proyectos de máximo nivel que incluso llegaron a la capa país e influyendo fuertemente en la academia la sociedad misma y formaciones humanistas de rigor.</p>`
        }
    ],
    pillarsList: [
        {
            title: 'Microeconomía',
            content: 'Toda empresa e incentivo cambia si se aborda desde variables regidas económicamente para balanceo natural. Nuestras resoluciones de cuellos las desengrasa.',
        },
        {
            title: 'IA / Aprendizaje Automático (ML)',
            content: 'Tratar sin la mística al avance para hacer de el orquestables conjuntos que entreguen impacto y gobierno total al cliente, desentrañándole todo poder pre-asignativo y siendo así los reales precursores en Agentes Corporativos.',
        },
        {
            title: 'Desarrollo SW Deeptech',
            content: 'Si todo lo bueno arriba hallado en teórica e inferencias no puede programarse eficientemente sin caer en atolladeros de servidores o parches, no sirve de nada en lo real. Nuestras plataformas y SaaS recogen con celo la mejor arquitectura imaginable al respecto.',
        }
    ],
    outputsList: [
        {
            title: 'Publicaciones Científicas (Papers)',
            content: 'Forman todo lo riguroso que no vendemos humos. En general, en contra de la academia clásica, lo teorizamos a toro pasado una vez comprobado de sobra que el sistema productivo funciona en casos.',
        },
        {
            title: 'Arquitecturas',
            content: 'Estructuras geniales que resguardan la estrategia sobre su esqueleto. Los "assets" base organizativos que unifican control.',
        },
        {
            title: 'Estándares y Modelajes',
            content: 'El método que salva de cometer costosos yerros al innovar. Unen pautas y reglas (cada vez más normalizadas).',
        },
        {
            title: 'Plataformas',
            content: 'Sistemas 100% terminados a cota superior que asimilan con máxima rapidez y estabilidad al usuario para explotar la IA.\n• Fractal — para la corporación general.\n• Alpha Dynamics — para inversiones.',
        }
    ],
    academicPartners: {
        title: 'Partners Académicos',
        subtitle: 'SIEMPRE TRABAJAMOS EN EQUIPO',
        introText: 'Nuestro Centro de Excelencia ha forjado alianzas con:',
        outroText: 'Esta tríada garantiza que nuestra ejecución sea técnicamente sólida, económicamente coherente y socialmente inteligible.',
        partners: [
            {
                institution: 'University College London',
                partnership: 'Fundamentos en IA, Machine Learning y rigor computacional.',
            },
            {
                institution: 'ICADE',
                partnership: 'Gestión de activos, finanzas y sistemas económicos aplicados.',
            },
            {
                institution: 'IE University',
                partnership: 'Humanidades, impacto social, cultura y la dimensión humana de la IA.',
            }
        ]
    },
    awards: {
        title: 'Simplemente Hacemos Nuestro Trabajo...',
        subtitle: '*PERO A VECES NOS DAN PREMIOS POR ELLO',
        items: [
            { name: 'Banking Tech Awards: Mejor Líder Tecnológico', category: 'Finalista', project: 'Nuestra visión prospectiva' },
            { name: 'Finovate: Innovador del Año', category: 'Finalista', project: 'Nuestro trabajo pionero en Agentic AI' },
            { name: 'Bankig Tech Awards: Mejor Tech del Futuro: IA y Datos', category: 'Ganador', project: 'Nuestra Plataforma Fractal' },
            { name: 'CogX: Mejor Innovación en Simulación', category: 'Ganador', project: 'Núcleo de nuestra Simulación VR' },
            { name: 'Banking Tech Awards: Mejor Plataforma de Trading', category: 'Ganador', project: 'Tesis Doctoral de Sergio (UCL) en BBVA' },
        ]
    },
    contactUs: {
        title: 'CONTÁCTANOS',
        addressLines: ['C. de Pradillo, 68', '28002 Madrid, España'],
    },
    footer: {
        isoText: 'Miembros de ambos grupos: IA y Web3 & Metaverso.',
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
        copyPromptFirst: 'Primero, copia el prompt:',
        copied: 'Copiado!',
        copyPrompt: 'Copiar prompt',
        checkLlms: 'Después, comprueba en los distintos LLMs:',
    },
    brands: {
        title: 'Marcas que confían en nosotros'
    },
    common: {
        seeMore: 'Saber más'
    },
};
