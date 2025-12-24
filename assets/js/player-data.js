const playerData = [
    // --- Current Squad ---
    {
        name: "Bukayo Saka", number: 7, season: "24TS", pos: "RW", stars: 5, ovr: 92, pac: 91, sho: 86, pas: 87, dri: 93, flag: "GB-ENG", avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p223340.png",
        general: {
            bio: "Bukayo Saka is Arsenal's 'Starboy' and a Hale End academy graduate who has established himself as one of the best wingers in world football. Known for his versatility, intelligence, and clutch performances, he has become the talisman of Mikel Arteta's side.",
            history: "Born in Ealing, London, Saka joined Arsenal's Hale End academy at the age of seven. He progressed rapidly through the youth ranks, making his first-team debut in November 2018 against Vorskla Poltava. Since then, he has become integral to both Arsenal and England, playing in major finals and consistently delivering double-digit goals and assists.",
            clubs: ["Arsenal (2018 - Present)"]
        },
        careerStats: [
            // 2023/24
            { season: "2023/24", comp: "Premier League", apps: 35, goals: 16, assists: 9 },
            { season: "2023/24", comp: "Champions League", apps: 9, goals: 4, assists: 4 },
            { season: "2023/24", comp: "FA Cup", apps: 1, goals: 0, assists: 0 },
            // ...
        ],
        achievements: [
            "PFA Young Player of the Year (2022/23)",
            "England Men's Player of the Year (2021/22, 2022/23)",
            "Arsenal Player of the Season (2020/21, 2021/22)",
            "London Football Awards Young Player of the Year (2023)",
            "Community Shield Winner (2020, 2023)",
            "FA Cup Winner (2019/20)"
        ]
    },
    {
        name: "Martin Ødegaard", number: 8, season: "24TY", pos: "CAM", stars: 5, ovr: 91, pac: 83, sho: 85, pas: 94, dri: 92, flag: "NO", avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p184029.png",
        general: {
            bio: "Martin Ødegaard is the captain of Arsenal and a midfield maestro known for his exceptional vision, creativity, and work rate. Orchestrating the play from the center, he leads by example with his pressing and technical elegance.",
            history: "A teenage prodigy who made his senior debut at 15 for Strømsgodset, Ødegaard joined Real Madrid in 2015. After successful loan spells at Heerenveen, Vitesse, and Real Sociedad, he joined Arsenal on loan in January 2021 before signing permanently that summer.",
            clubs: ["Strømsgodset (2014-2015)", "Real Madrid (2015-2021)", "Heerenveen (Loan)", "Vitesse (Loan)", "Real Sociedad (Loan)", "Arsenal (2021 - Present)"]
        },
        careerStats: [
            { season: "2023/24", comp: "Premier League", apps: 35, goals: 8, assists: 10 },
            { season: "2023/24", comp: "Champions League", apps: 9, goals: 2, assists: 1 },
            { season: "2022/23", comp: "Premier League", apps: 37, goals: 15, assists: 7 },
            { season: "2021/22", comp: "Premier League", apps: 36, goals: 7, assists: 4 }
        ],
        achievements: [
            "Arsenal Player of the Season (2022/23)",
            "PFA Team of the Year (2022/23)",
            "Premier League Player of the Month (Nov/Dec 2022)",
            "Community Shield Winner (2023)"
        ]
    },
    {
        name: "Declan Rice", number: 41, season: "24TS", pos: "CDM", stars: 4, ovr: 90, pac: 80, sho: 78, pas: 89, dri: 85, flag: "GB-ENG", avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p204480.png",
        general: {
            bio: "Declan Rice is a powerhouse midfielder who provides defensive stability and driving energy to the Arsenal team. Signed for a club-record fee, his leadership, tackling, and ability to carry the ball make him indispensable.",
            history: "Released by Chelsea's academy at 14, Rice joined West Ham United where he blossomed into one of the league's best midfielders, eventually captaining them to European glory in the UEFA Europa Conference League before joining Arsenal in 2023.",
            clubs: ["West Ham United (2017-2023)", "Arsenal (2023 - Present)"]
        },
        careerStats: [
            { season: "2023/24", comp: "Premier League", apps: 38, goals: 7, assists: 8 },
            { season: "2023/24", comp: "Champions League", apps: 10, goals: 0, assists: 1 },
            { season: "2022/23", comp: "Premier League (West Ham)", apps: 37, goals: 4, assists: 2 }
        ],
        achievements: [
            "Europa Conference League Winner (2023 with West Ham)",
            "Hammer of the Year (2020, 2022, 2023)",
            "Arsenal Player of the Month (Aug 2023)",
            "Community Shield Winner (2023)"
        ]
    },
    {
        name: "William Saliba", number: 2, season: "24TS", pos: "CB", stars: 3, ovr: 89, pac: 85, sho: 55, pas: 80, dri: 81, flag: "FR", avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p462424.png",
        general: {
            bio: "William Saliba is a composed and dominant center-back, often referred to as a 'Rolls-Royce' defender for his elegance on the ball. His recovery pace, strength, and reading of the game allow Arsenal to play a high defensive line.",
            history: "Signed from Saint-Étienne as a teenager in 2019, Saliba spent three years on loan in Ligue 1 to develop. His breakout season at Marseille earned him the Ligue 1 Young Player of the Year award before he returned to Arsenal to instantly become a starter.",
            clubs: ["Saint-Étienne (2018-2019)", "Arsenal (2019 - Present)", "Nice (Loan)", "Marseille (Loan)"]
        },
        careerStats: [
            { season: "2023/24", comp: "Premier League", apps: 38, goals: 2, assists: 1 },
            { season: "2023/24", comp: "Champions League", apps: 10, goals: 0, assists: 0 },
            { season: "2022/23", comp: "Premier League", apps: 27, goals: 2, assists: 1 },
            { season: "2021/22", comp: "Ligue 1 (Marseille)", apps: 36, goals: 0, assists: 0 }
        ],
        achievements: [
            "PFA Team of the Year (2022/23, 2023/24)",
            "Ligue 1 Young Player of the Year (2021/22)",
            "Community Shield Winner (2020, 2023)"
        ]
    },
    {
        name: "Gabriel Magalhães", number: 6, season: "24TS", pos: "CB", stars: 3, ovr: 88, pac: 80, sho: 60, pas: 75, dri: 72, flag: "BR", avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p226597.png",
        general: {
            bio: "Gabriel Magalhães is an aggressive and physically dominant center-back who forms a formidable partnership with Saliba. Excellent in the air and a threat from set-pieces, he is the defensive warrior of the backline.",
            history: "Gabriel developed in Brazil with Avaí before moving to Lille in France. His performances in Ligue 1 caught the eye of Arsenal, who signed him in 2020. He scored on his debut against Fulham.",
            clubs: ["Avaí (2017)", "Lille (2017-2020)", "Arsenal (2020 - Present)"]
        },
        careerStats: [
            { season: "2023/24", comp: "Premier League", apps: 36, goals: 4, assists: 0 },
            { season: "2023/24", comp: "Champions League", apps: 10, goals: 0, assists: 0 },
            { season: "2022/23", comp: "Premier League", apps: 38, goals: 3, assists: 0 },
            { season: "2021/22", comp: "Premier League", apps: 35, goals: 5, assists: 0 }
        ],
        achievements: [
            "Arsenal Player of the Month (Multiple)",
            "Community Shield Winner (2023)"
        ]
    },
    {
        name: "Gabriel Jesus", number: 9, season: "23", pos: "ST", stars: 4, ovr: 85, pac: 86, sho: 82, pas: 79, dri: 88, flag: "BR", avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p205651.png",
        general: {
            bio: "Gabriel Jesus is a dynamic forward known for his relentless pressing, dribbling ability, and link-up play. He brings a winning mentality to the squad, having lifted multiple Premier League titles before joining Arsenal.",
            history: "Rising from the streets of São Paulo, Jesus starred for Palmeiras before Pep Guardiola brought him to Manchester City. After winning 4 Premier League titles, he joined Arsenal in 2022 to be the main striker.",
            clubs: ["Palmeiras (2015-2016)", "Manchester City (2017-2022)", "Arsenal (2022 - Present)"]
        },
        careerStats: [
            { season: "2023/24", comp: "Premier League", apps: 27, goals: 4, assists: 5 },
            { season: "2023/24", comp: "Champions League", apps: 8, goals: 4, assists: 3 },
            { season: "2022/23", comp: "Premier League", apps: 26, goals: 11, assists: 6 }
        ],
        achievements: [
            "Premier League Champion (4x with Man City)",
            "Copa América Winner (2019)",
            "Community Shield Winner (2023)"
        ]
    },
    {
        name: "G. Martinelli", number: 11, season: "24", pos: "LW", stars: 4, ovr: 86, pac: 92, sho: 80, pas: 78, dri: 87, flag: "BR", avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p444145.png",
        general: {
            bio: "Gabriel Martinelli is an electrifying winger with blistering pace and a tireless work ethic. Jurgen Klopp once called him a 'talent of the century'. His direct running and clinical finishing make him a constant threat.",
            history: "Scouted from the Brazilian lower leagues (Ituano), Martinelli joined Arsenal in 2019 as an unknown prospect. He quickly announced himself with goals in the League Cup and Europa League, including a famous solo goal against Chelsea.",
            clubs: ["Ituano (2017-2019)", "Arsenal (2019 - Present)"]
        },
        careerStats: [
            { season: "2023/24", comp: "Premier League", apps: 35, goals: 6, assists: 4 },
            { season: "2023/24", comp: "Champions League", apps: 6, goals: 2, assists: 0 },
            { season: "2022/23", comp: "Premier League", apps: 36, goals: 15, assists: 5 },
            { season: "2021/22", comp: "Premier League", apps: 29, goals: 6, assists: 6 }
        ],
        achievements: [
            "Olympic Gold Medal (2020 with Brazil)",
            "FA Cup Winner (2019/20)"
        ]
    },
    {
        name: "Ben White", number: 4, season: "24", pos: "RB", stars: 3, ovr: 86, pac: 82, sho: 65, pas: 82, dri: 80, flag: "GB-ENG", avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p198869.png",
        general: {
            bio: "Ben White is a technically gifted defender who excels at right-back. His overlapping runs, calm distribution, and versatility have made him a key part of Arteta's system.",
            history: "Released by Southampton at 16, White rebuilt his career at Brighton & Hove Albion. After a standout loan at Leeds United that led to promotion, he established himself in the Premier League before Arsenal signed him for £50m in 2021.",
            clubs: ["Brighton & Hove Albion (2016-2021)", "Leeds United (Loan)", "Arsenal (2021 - Present)"]
        },
        careerStats: [
            { season: "2023/24", comp: "Premier League", apps: 37, goals: 4, assists: 4 },
            { season: "2023/24", comp: "Champions League", apps: 10, goals: 0, assists: 1 },
            { season: "2022/23", comp: "Premier League", apps: 38, goals: 2, assists: 5 }
        ],
        achievements: [
            "Championship Winner (2019/20 with Leeds)",
            "Community Shield Winner (2023)"
        ]
    },
    {
        name: "Kai Havertz", number: 29, season: "24TS", pos: "ST", stars: 4, ovr: 87, pac: 84, sho: 83, pas: 84, dri: 85, flag: "DE", avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p219847.png",
        general: {
            bio: "Kai Havertz is a versatile fluid forward who excels at finding space and linking play. Initially a midfielder, he has thrived as a false 9 or striker, using his height and intelligence to disrupt defenses.",
            history: "A prodigious talent at Bayer Leverkusen, Havertz moved to Chelsea in 2020 where he scored the winning goal in the Champions League final. He crossed London to join Arsenal in 2023.",
            clubs: ["Bayer Leverkusen (2016-2020)", "Chelsea (2020-2023)", "Arsenal (2023 - Present)"]
        },
        careerStats: [
            { season: "2023/24", comp: "Premier League", apps: 37, goals: 13, assists: 7 },
            { season: "2023/24", comp: "Champions League", apps: 10, goals: 1, assists: 0 },
            { season: "2022/23", comp: "Premier League (Chelsea)", apps: 35, goals: 7, assists: 1 }
        ],
        achievements: [
            "Champions League Winner (2021 with Chelsea)",
            "FIFA Club World Cup Winner (2021)",
            "Community Shield Winner (2023)"
        ]
    },
    {
        name: "Leandro Trossard", number: 19, season: "24", pos: "LW", stars: 4, ovr: 84, pac: 83, sho: 84, pas: 82, dri: 86, flag: "BE", avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p116216.png",
        general: {
            bio: "Leandro Trossard is a two-footed technical attacker who can play anywhere across the front line. Known for his clinical finishing and ability to score crucial goals off the bench.",
            history: "After winning the Belgian league with Genk, Trossard impressed at Brighton with his skill and creativity. Arsenal signed him in January 2023, and he quickly became a fan favorite for his efficiency.",
            clubs: ["Genk (2012-2019)", "Brighton (2019-2023)", "Arsenal (2023 - Present)"]
        },
        careerStats: [
            { season: "2023/24", comp: "Premier League", apps: 34, goals: 12, assists: 1 },
            { season: "2023/24", comp: "Champions League", apps: 9, goals: 4, assists: 1 },
            { season: "2022/23", comp: "Premier League (Ars/Bri)", apps: 36, goals: 8, assists: 12 }
        ],
        achievements: [
            "Belgian Pro League Winner (2018/19)",
            "Community Shield Winner (2023)"
        ]
    },
    {
        name: "Thomas Partey", number: 5, season: "23", pos: "CDM", stars: 3, ovr: 84, pac: 75, sho: 78, pas: 84, dri: 83, flag: "GH", avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p167199.png",
        general: {
            bio: "Thomas Partey is a dynamic box-to-box midfielder who brings power, technique, and tactical intelligence to the engine room. His ability to break lines with his passing is crucial for transition.",
            history: "Partey rose through the ranks at Atlético Madrid, becoming a key player for Diego Simeone. Arsenal triggered his release clause on deadline day in 2020 to bring him to North London.",
            clubs: ["Atlético Madrid (2013-2020)", "Mallorca (Loan)", "Almería (Loan)", "Arsenal (2020 - Present)"]
        },
        careerStats: [
            { season: "2023/24", comp: "Premier League", apps: 14, goals: 0, assists: 0 },
            { season: "2022/23", comp: "Premier League", apps: 33, goals: 3, assists: 0 },
            { season: "2021/22", comp: "Premier League", apps: 24, goals: 2, assists: 1 }
        ],
        achievements: [
            "La Liga Winner (2020/21 with Atlético)",
            "Europa League Winner (2017/18 with Atlético)",
            "Community Shield Winner (2023)"
        ]
    },
    {
        name: "Jorginho", number: 20, season: "23", pos: "CM", stars: 3, ovr: 83, pac: 60, sho: 70, pas: 88, dri: 82, flag: "IT", avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p5682.png",
        general: {
            bio: "Jorginho is an elite playmaker who controls the tempo of the game with his short passing and positional awareness. A calmness personified on the ball, he brings vast experience to the squad.",
            history: "Brazilian-born but an Italian international, Jorginho made his name at Napoli before winning the Champions League with Chelsea. He joined Arsenal in January 2023 to add winning mentality to the team.",
            clubs: ["Napoli (2014-2018)", "Chelsea (2018-2023)", "Arsenal (2023 - Present)"]
        },
        careerStats: [
            { season: "2023/24", comp: "Premier League", apps: 24, goals: 0, assists: 2 },
            { season: "2023/24", comp: "Champions League", apps: 9, goals: 1, assists: 0 },
            { season: "2022/23", comp: "Premier League (Che/Ars)", apps: 32, goals: 2, assists: 1 }
        ],
        achievements: [
            "UEFA Euro 2020 Winner (Italy)",
            "Champions League Winner (2021 with Chelsea)",
            "UEFA Men's Player of the Year (2021)"
        ]
    },
    {
        name: "Oleksandr Zinchenko", number: 17, season: "23", pos: "LB", stars: 3, ovr: 83, pac: 78, sho: 72, pas: 86, dri: 85, flag: "UA", avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p206325.png",
        general: {
            bio: "Oleksandr Zinchenko is a technically gifted inverted full-back who operates as an extra midfielder in possession. His range of passing and tactical understanding are key to Arsenal's buildup.",
            history: "Zinchenko was converted from an attacking midfielder to a left-back by Pep Guardiola at Manchester City. After winning four Premier League titles, he reunited with Arteta at Arsenal in 2022.",
            clubs: ["Ufa (2015-2016)", "Manchester City (2016-2022)", "PSV (Loan)", "Arsenal (2022 - Present)"]
        },
        careerStats: [
            { season: "2023/24", comp: "Premier League", apps: 27, goals: 1, assists: 2 },
            { season: "2023/24", comp: "Champions League", apps: 6, goals: 0, assists: 0 },
            { season: "2022/23", comp: "Premier League", apps: 27, goals: 1, assists: 2 }
        ],
        achievements: [
            "Premier League Champion (4x with Man City)",
            "Ukrainian Footballer of the Year (2019)",
            "Community Shield Winner (2023)"
        ]
    },
    {
        name: "Takehiro Tomiyasu", number: 18, season: "23", pos: "RB", stars: 3, ovr: 81, pac: 79, sho: 55, pas: 74, dri: 73, flag: "JP", avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p223723.png",
        general: {
            bio: "Takehiro Tomiyasu is a versatile and ambidextrous defender capable of playing anywhere across the backline. Known for his defensive solidity and aerial ability, he is a reliable presence.",
            history: "Tomiyasu moved to Europe with Sint-Truiden in Belgium before impressing in Serie A with Bologna. Arsenal signed him in 2021, and he quickly adapted to the physicality of the Premier League.",
            clubs: ["Avispa Fukuoka (2015-2017)", "Sint-Truiden (2018-2019)", "Bologna (2019-2021)", "Arsenal (2021 - Present)"]
        },
        careerStats: [
            { season: "2023/24", comp: "Premier League", apps: 22, goals: 2, assists: 1 },
            { season: "2023/24", comp: "Champions League", apps: 6, goals: 0, assists: 2 },
            { season: "2022/23", comp: "Premier League", apps: 21, goals: 0, assists: 1 }
        ],
        achievements: [
            "Asian Cup Runner-up (2019)",
            "Community Shield Winner (2023)"
        ]
    },
    {
        name: "Jurrien Timber", number: 12, season: "24", pos: "LB", stars: 3, ovr: 82, pac: 84, sho: 60, pas: 80, dri: 82, flag: "NL", avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p445122.png",
        general: {
            bio: "Jurrien Timber is a modern, ball-playing defender who is comfortable stepping into midfield. His exceptional composure and passing range make him perfectly suited for Arsenal's style.",
            history: "A product of the famed Ajax academy, Timber won two Eredivisie titles before joining Arsenal in 2023. An ACL injury disrupted his debut season, but his talent remains undeniable.",
            clubs: ["Ajax (2019-2023)", "Arsenal (2023 - Present)"]
        },
        careerStats: [
            { season: "2023/24", comp: "Premier League", apps: 2, goals: 0, assists: 0 },
            { season: "2022/23", comp: "Eredivisie (Ajax)", apps: 34, goals: 2, assists: 2 },
            { season: "2021/22", comp: "Eredivisie (Ajax)", apps: 30, goals: 3, assists: 2 }
        ],
        achievements: [
            "Eredivisie Champion (2020/21, 2021/22)",
            "Community Shield Winner (2023)"
        ]
    },
    {
        name: "Jakub Kiwior", number: 15, season: "24", pos: "CB", stars: 2, ovr: 79, pac: 78, sho: 45, pas: 72, dri: 70, flag: "PL", avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p440854.png",
        general: {
            bio: "Jakub Kiwior is a left-footed center-back known for his speed and passing ability. He offers valuable cover and balance to the defense, capable of playing centrally or at left-back.",
            history: "Kiwior developed in Poland and Slovakia before moving to Serie A with Spezia. His composed performances caught Arsenal's attention, and he signed in January 2023.",
            clubs: ["Spezia (2021-2023)", "Arsenal (2023 - Present)"]
        },
        careerStats: [
            { season: "2023/24", comp: "Premier League", apps: 20, goals: 1, assists: 3 },
            { season: "2023/24", comp: "Champions League", apps: 7, goals: 0, assists: 0 },
            { season: "2022/23", comp: "Premier League", apps: 7, goals: 1, assists: 0 }
        ],
        achievements: [
            "Community Shield Winner (2023)"
        ]
    },
    {
        name: "David Raya", number: 22, season: "24TS", pos: "GK", stars: 1, ovr: 86, pac: 82, sho: 55, pas: 88, dri: 70, flag: "ES", avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p154561.png",
        general: {
            bio: "David Raya is a modern goalkeeper renowned for his distribution and ability to claim crosses. His comfort with the ball at his feet allows Arsenal to build from the back with confidence.",
            history: "Raya moved to England at 16, coming through Blackburn Rovers' academy. He excelled at Brentford, helping them to promotion and establishing himself as a top Premier League keeper before joining Arsenal.",
            clubs: ["Blackburn Rovers (2013-2019)", "Brentford (2019-2023)", "Arsenal (2023 - Present)"]
        },
        careerStats: [
            { season: "2023/24", comp: "Premier League", apps: 32, goals: 0, assists: 0 },
            { season: "2023/24", comp: "Champions League", apps: 9, goals: 0, assists: 0 },
            { season: "2022/23", comp: "Premier League (Brentford)", apps: 38, goals: 0, assists: 0 }
        ],
        achievements: [
            "Premier League Golden Glove (2023/24)",
            "UEFA Nations League Winner (2023 with Spain)"
        ]
    },
    {
        name: "Aaron Ramsdale", season: "23", pos: "GK", stars: 1, ovr: 82, pac: 80, sho: 60, pas: 85, dri: 65, flag: "GB-ENG", avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p225321.png",
        general: {
            bio: "Aaron Ramsdale is a passionate and shot-stopping goalkeeper who quickly endeared himself to the Emirates crowd. His reflexive saves and leadership were pivotal in Arsenal's return to Champions League football.",
            history: "Despite setbacks early in his career with relegations at Bournemouth and Sheffield United, Ramsdale's talent was evident. Arsenal signed him in 2021, and he proved doubters wrong with spectacular performances.",
            clubs: ["Sheffield United (2016-2021)", "Bournemouth (2017-2020)", "Arsenal (2021 - Present)"]
        },
        careerStats: [
            { season: "2023/24", comp: "Premier League", apps: 6, goals: 0, assists: 0 },
            { season: "2022/23", comp: "Premier League", apps: 38, goals: 0, assists: 0 },
            { season: "2021/22", comp: "Premier League", apps: 34, goals: 0, assists: 0 }
        ],
        achievements: [
            "PFA Team of the Year (2022/23)",
            "Community Shield Winner (2023)",
            "U19 Euro Winner (2017)"
        ]
    },
    {
        name: "Fabio Vieira", number: 21, season: "23", pos: "CAM", stars: 3, ovr: 78, pac: 76, sho: 75, pas: 82, dri: 80, flag: "PT", avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p438098.png",
        general: {
            bio: "Fabio Vieira is a creative playmaker with a lethal left foot. Known for his vision and final ball, he provides a different dimension to the attack.",
            history: "Vieira broke through at Porto, where he was the top assist provider in the league. He joined Arsenal in 2022 as one of Europe's promising young midfielders.",
            clubs: ["Porto (2019-2022)", "Arsenal (2022 - Present)"]
        },
        careerStats: [
            { season: "2023/24", comp: "Premier League", apps: 11, goals: 1, assists: 2 },
            { season: "2022/23", comp: "Premier League", apps: 22, goals: 1, assists: 2 },
            { season: "2021/22", comp: "Primeira Liga (Porto)", apps: 27, goals: 6, assists: 14 }
        ],
        achievements: [
            "Primeira Liga Champion (2019/20, 2021/22)",
            "U21 Euro Player of the Tournament (2021)",
            "Community Shield Winner (2023)"
        ]
    },
    {
        name: "Eddie Nketiah", season: "23", pos: "ST", stars: 3, ovr: 77, pac: 84, sho: 78, pas: 68, dri: 80, flag: "GB-ENG", avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p205533.png",
        general: {
            bio: "Eddie Nketiah is a predatory striker who comes alive in the penalty box. Another graduate of the Hale End academy, he is England U21's all-time record goalscorer.",
            history: "Available after leaving Chelsea as a youngster, Nketiah joined Arsenal and scored twice on his home debut. He has developed into a reliable goalscorer for the first team.",
            clubs: ["Arsenal (2017 - Present)", "Leeds United (Loan)"]
        },
        careerStats: [
            { season: "2023/24", comp: "Premier League", apps: 27, goals: 5, assists: 2 },
            { season: "2023/24", comp: "Champions League", apps: 6, goals: 0, assists: 0 },
            { season: "2022/23", comp: "Premier League", apps: 30, goals: 4, assists: 1 }
        ],
        achievements: [
            "FA Cup Winner (2019/20)",
            "Championship Winner (2019/20 with Leeds)",
            "England U21 Record Goalscorer"
        ]
    },

    // --- Legends (Invincibles & Icons) ---
    {
        name: "Thierry Henry", season: "ICON", pos: "ST", stars: 5, ovr: 96, pac: 98, sho: 96, pas: 90, dri: 95, flag: "FR", avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p1619.png",
        general: {
            bio: "Thierry Henry is arguably the greatest player in Arsenal's history. A striker of unparalleled elegance, pace, and finishing ability, he redefined the role. He is the club's all-time record goalscorer.",
            history: "Signed from Juventus as a winger, Wenger converted him into a striker. He went on to win 4 Golden Boots and lead the Invincibles. His statue stands outside the Emirates Stadium.",
            clubs: ["Monaco (1994-1999)", "Juventus (1999)", "Arsenal (1999-2007, 2012)", "Barcelona (2007-2010)", "NY Red Bulls (2010-2014)"]
        },
        careerStats: [
            { season: "2003/04", comp: "Premier League", apps: 37, goals: 30, assists: 6 },
            { season: "2002/03", comp: "Premier League", apps: 37, goals: 24, assists: 20 },
            { season: "2001/02", comp: "Premier League", apps: 33, goals: 24, assists: 5 },
            { season: "Overall", comp: "Arsenal Career", apps: 377, goals: 228, assists: 103 }
        ],
        achievements: [
            "Premier League Champion (2001/02, 2003/04)",
            "FA Cup Winner (2002, 2003)",
            "Premier League Golden Boot (4x)",
            "PFA Players' Player of the Year (2x)",
            "FWA Footballer of the Year (3x)"
        ]
    },
    {
        name: "Dennis Bergkamp", season: "ICON", pos: "CF", stars: 5, ovr: 94, pac: 85, sho: 94, pas: 95, dri: 96, flag: "NL", avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p1608.png",
        general: {
            bio: "Dennis Bergkamp, the 'Non-Flying Dutchman', was a technician of the highest order. His touch, vision, and executed goals bordered on the impossible. He was the creative fulcrum of three title-winning sides.",
            history: "A product of Ajax's total football, Bergkamp joined after a difficult spell at Inter. His arrival signaled Arsenal's transformation into a modern, attractive football team.",
            clubs: ["Ajax (1986-1993)", "Inter Milan (1993-1995)", "Arsenal (1995-2006)"]
        },
        careerStats: [
            { season: "1997/98", comp: "Premier League", apps: 28, goals: 16, assists: 11 },
            { season: "2001/02", comp: "Premier League", apps: 33, goals: 9, assists: 12 },
            { season: "Overall", comp: "Arsenal Career", apps: 423, goals: 120, assists: 94 }
        ],
        achievements: [
            "Premier League Champion (1997/98, 2001/02, 2003/04)",
            "FA Cup Winner (4x)",
            "PFA Players' Player of the Year (1998)",
            "FWA Footballer of the Year (1998)"
        ]
    },
    {
        name: "Patrick Vieira", season: "ICON", pos: "CM", stars: 4, ovr: 93, pac: 86, sho: 82, pas: 89, dri: 87, flag: "FR", avatar: "./pic/players/vieira.png",
        general: {
            bio: "Patrick Vieira was the ultimate captain and midfield warrior. Combining immense physical power with sublime technique, he dominated midfields for a decade and captained the Invincibles.",
            history: "Wenger's first signing, Vieira arrived as an unknown teenager and left as a legend. His rivalry with Roy Keane defined an era of the Premier League.",
            clubs: ["Cannes (1994-1995)", "AC Milan (1995-1996)", "Arsenal (1996-2005)", "Juventus (2005-2006)", "Inter Milan (2006-2010)", "Man City (2010-2011)"]
        },
        careerStats: [
            { season: "2003/04", comp: "Premier League", apps: 29, goals: 3, assists: 5 },
            { season: "2000/01", comp: "Premier League", apps: 30, goals: 6, assists: 5 },
            { season: "Overall", comp: "Arsenal Career", apps: 406, goals: 33, assists: 34 }
        ],
        achievements: [
            "Premier League Champion (3x)",
            "FA Cup Winner (4x)",
            "World Cup Winner (1998 with France)",
            "Euro 2000 Winner (France)"
        ]
    },
    {
        name: "Robert Pires", season: "ICON", pos: "LM", stars: 4, ovr: 91, pac: 88, sho: 85, pas: 90, dri: 92, flag: "FR", avatar: "./pic/players/pires.png",
        general: {
            bio: "Robert Pires brought a unique flair and creativity to the left wing. His telepathic understanding with Thierry Henry made Arsenal's left flank unstoppable during the early 2000s.",
            history: "Signed to replace Marc Overmars, Pires initially struggled with the physicality but soon adapted to become the FWA Footballer of the Year. He scored many spectacular goals.",
            clubs: ["Metz (1993-1998)", "Marseille (1998-2000)", "Arsenal (2000-2006)", "Villarreal (2006-2010)"]
        },
        careerStats: [
            { season: "2001/02", comp: "Premier League", apps: 28, goals: 9, assists: 15 },
            { season: "2003/04", comp: "Premier League", apps: 36, goals: 14, assists: 8 },
            { season: "Overall", comp: "Arsenal Career", apps: 284, goals: 84, assists: 40 }
        ],
        achievements: [
            "Premier League Champion (2x)",
            "FA Cup Winner (3x)",
            "FWA Footballer of the Year (2001/02)",
            "World Cup Winner (1998)"
        ]
    },
    {
        name: "Sol Campbell", season: "ICON", pos: "CB", stars: 3, ovr: 90, pac: 84, sho: 45, pas: 70, dri: 72, flag: "GB-ENG", avatar: "./pic/players/campbell.png",
        general: {
            bio: "Sol Campbell was a colossus in defense. His controversial move across North London resulted in unprecedented success, providing the rock-solid foundation for the Invincibles.",
            history: "Captain of Tottenham, Campbell let his contract run down to join Arsenal on a free transfer in search of trophies. He won the Double in his first season.",
            clubs: ["Tottenham (1992-2001)", "Arsenal (2001-2006, 2010)", "Portsmouth (2006-2009)"]
        },
        careerStats: [
            { season: "2001/02", comp: "Premier League", apps: 31, goals: 2, assists: 0 },
            { season: "2003/04", comp: "Premier League", apps: 35, goals: 1, assists: 0 },
            { season: "Overall", comp: "Arsenal Career", apps: 211, goals: 12, assists: 4 }
        ],
        achievements: [
            "Premier League Champion (2x)",
            "FA Cup Winner (3x)",
            "PFA Team of the Year (3x)"
        ]
    },
    {
        name: "Ashley Cole", season: "ICON", pos: "LB", stars: 3, ovr: 89, pac: 92, sho: 65, pas: 84, dri: 85, flag: "GB-ENG", avatar: "./pic/players/cole.png",
        general: {
            bio: "Ashley Cole is widely considered the best left-back in Premier League history. energetic, defensively sound, and dangerous going forward, he was an integral part of the Invincibles.",
            history: "An Arsenal academy graduate, Cole broke into the team as a teenager and made the left-back spot his own. He formed a lethal partnership with Pires/Henry.",
            clubs: ["Arsenal (1999-2006)", "Chelsea (2006-2014)"]
        },
        careerStats: [
            { season: "2003/04", comp: "Premier League", apps: 32, goals: 0, assists: 4 },
            { season: "2002/03", comp: "Premier League", apps: 31, goals: 3, assists: 3 },
            { season: "Overall", comp: "Arsenal Career", apps: 228, goals: 9, assists: 20 }
        ],
        achievements: [
            "Premier League Champion (2x)",
            "FA Cup Winner (3x with Arsenal)",
            "PFA Team of the Year (Multiple)"
        ]
    },
    {
        name: "Freddie Ljungberg", season: "ICON", pos: "RM", stars: 4, ovr: 88, pac: 90, sho: 82, pas: 84, dri: 88, flag: "SE", avatar: "./pic/players/ljungberg.png",
        general: {
            bio: "Freddie Ljungberg was a dynamic midfielder known for his late runs into the box and propensity for scoring in big games. His red hair and tireless energy made him an icon.",
            history: "Signed from Halmstad after Wenger watched him on TV, Ljungberg scored on his debut against Man Utd. He was the Player of the Season in the 2001/02 Double winning campaign.",
            clubs: ["Halmstad (1994-1998)", "Arsenal (1998-2007)", "West Ham (2007-2008)"]
        },
        careerStats: [
            { season: "2001/02", comp: "Premier League", apps: 25, goals: 12, assists: 6 },
            { season: "2004/05", comp: "Premier League", apps: 26, goals: 10, assists: 6 },
            { season: "Overall", comp: "Arsenal Career", apps: 328, goals: 72, assists: 35 }
        ],
        achievements: [
            "Premier League Champion (2x)",
            "FA Cup Winner (3x)",
            "Premier League Player of the Season (2001/02)"
        ]
    },
    {
        name: "Ian Wright", season: "ICON", pos: "ST", stars: 4, ovr: 90, pac: 91, sho: 92, pas: 78, dri: 86, flag: "GB-ENG", avatar: "./pic/players/wright.png",
        general: {
            bio: "Ian Wright was Arsenal's all-time record goalscorer before Henry. A charismatic and explosive striker, he scored goals of all types and was loved for his passion.",
            history: "A late bloomer, Wrighty joined from Crystal Palace and instantly became a hero. He scored 185 goals for the club, winning the league and domestic cups.",
            clubs: ["Crystal Palace (1985-1991)", "Arsenal (1991-1998)", "West Ham (1998-1999)"]
        },
        careerStats: [
            { season: "1991/92", comp: "First Division", apps: 30, goals: 29, assists: 0 },
            { season: "1996/97", comp: "Premier League", apps: 35, goals: 23, assists: 7 },
            { season: "Overall", comp: "Arsenal Career", apps: 288, goals: 185, assists: 30 }
        ],
        achievements: [
            "Premier League Champion (1997/98)",
            "FA Cup Winner (2x)",
            "League Cup Winner (1993)",
            "European Cup Winners' Cup (1994)"
        ]
    },
    {
        name: "David Seaman", season: "ICON", pos: "GK", stars: 1, ovr: 89, pac: 80, sho: 50, pas: 82, dri: 75, flag: "GB-ENG", avatar: "./pic/players/seaman.jpg",
        general: {
            bio: "David Seaman, 'Safe Hands', is Arsenal's greatest ever goalkeeper. Renowned for his ponytail and incredible reaction saves, he was the backbone of George Graham and Wenger's defenses.",
            history: "Signed from QPR, Seaman spent 13 years at Arsenal. His save against Sheffield United in the FA Cup semi-final is legendary.",
            clubs: ["QPR (1986-1990)", "Arsenal (1990-2003)", "Man City (2003-2004)"]
        },
        careerStats: [
            { season: "1990/91", comp: "First Division", apps: 38, goals: 0, assists: 0 },
            { season: "1998/99", comp: "Premier League", apps: 38, goals: 0, assists: 0 },
            { season: "Overall", comp: "Arsenal Career", apps: 564, goals: 0, assists: 0 }
        ],
        achievements: [
            "League Champion (3x)",
            "FA Cup Winner (4x)",
            "European Cup Winners' Cup (1994)"
        ]
    },
    {
        name: "Tony Adams", season: "ICON", pos: "CB", stars: 2, ovr: 91, pac: 78, sho: 55, pas: 75, dri: 70, flag: "GB-ENG", avatar: "./pic/players/adams.jpg",
        general: {
            bio: "Tony Adams, 'Mr. Arsenal', is the ultimate one-club man. A captain who led the club to league titles in three different decades. A commanding leader and warrior.",
            history: "Joining as a schoolboy, Adams made his debut at 17 and became captain at 21. His goal against Everton to seal the 1998 title is iconic.",
            clubs: ["Arsenal (1983-2002)"]
        },
        careerStats: [
            { season: "1988/89", comp: "First Division", apps: 36, goals: 4, assists: 0 },
            { season: "1997/98", comp: "Premier League", apps: 26, goals: 3, assists: 0 },
            { season: "Overall", comp: "Arsenal Career", apps: 669, goals: 48, assists: 15 }
        ],
        achievements: [
            "League Champion (4x)",
            "FA Cup Winner (3x)",
            "League Cup Winner (2x)",
            "European Cup Winners' Cup (1994)"
        ]
    },
    {
        name: "Emmanuel Petit", season: "ICON", pos: "CDM", stars: 3, ovr: 88, pac: 82, sho: 75, pas: 86, dri: 80, flag: "FR", avatar: "./pic/players/petit.png",
        general: {
            bio: "Emmanuel Petit formed a perfect midfield partnership with Patrick Vieira. His energy, passing range, and ponytail made him instantly recognizable.",
            history: "Reunited with Wenger from their Monaco days, Petit was instrumental in the 1997/98 Double winning season. He scored in the World Cup final that same year.",
            clubs: ["Monaco (1988-1997)", "Arsenal (1997-2000)", "Barcelona (2000-2001)", "Chelsea (2001-2004)"]
        },
        careerStats: [
            { season: "1997/98", comp: "Premier League", apps: 32, goals: 2, assists: 7 },
            { season: "1998/99", comp: "Premier League", apps: 27, goals: 4, assists: 3 },
            { season: "Overall", comp: "Arsenal Career", apps: 118, goals: 11, assists: 24 }
        ],
        achievements: [
            "Premier League Champion (1997/98)",
            "FA Cup Winner (1998)",
            "World Cup Winner (1998)"
        ]
    },
    {
        name: "Lauren", season: "ICON", pos: "RB", stars: 3, ovr: 86, pac: 85, sho: 65, pas: 80, dri: 82, flag: "CM", avatar: "./pic/players/lauren.jpg",
        general: {
            bio: "Lauren was an unsung hero of the Invincibles. Converted from a midfielder to a right-back, his strength, technique, and coolness under pressure (penalty prowess) were vital.",
            history: "Signed from Mallorca, Lauren replaced Lee Dixon. He played almost every game of the unbeaten season and was known for his competitive streak.",
            clubs: ["Mallorca (1998-2000)", "Arsenal (2000-2007)", "Portsmouth (2007-2009)"]
        },
        careerStats: [
            { season: "2003/04", comp: "Premier League", apps: 32, goals: 0, assists: 2 },
            { season: "2001/02", comp: "Premier League", apps: 27, goals: 2, assists: 3 },
            { season: "Overall", comp: "Arsenal Career", apps: 242, goals: 11, assists: 7 }
        ],
        achievements: [
            "Premier League Champion (2x)",
            "FA Cup Winner (3x)",
            "Olympic Gold Medal (2000 with Cameroon)"
        ]
    },
    {
        name: "Gilberto Silva", season: "ICON", pos: "CDM", stars: 3, ovr: 87, pac: 78, sho: 68, pas: 84, dri: 79, flag: "BR", avatar: "./pic/players/gilberto.jpg",
        general: {
            bio: "Gilberto Silva, the 'Invisible Wall', provided the balance to Arsenal's attacking flair. His positional sense and interception stats were world-class.",
            history: "Signed after winning the World Cup with Brazil in 2002, Gilberto scored the fastest Champions League goal (at the time) on his debut. He was a silent guardian of the Invincibles.",
            clubs: ["Atletico Mineiro (2000-2002)", "Arsenal (2002-2008)", "Panathinaikos (2008-2011)"]
        },
        careerStats: [
            { season: "2003/04", comp: "Premier League", apps: 32, goals: 4, assists: 1 },
            { season: "2006/07", comp: "Premier League", apps: 34, goals: 10, assists: 1 },
            { season: "Overall", comp: "Arsenal Career", apps: 244, goals: 24, assists: 13 }
        ],
        achievements: [
            "Premier League Champion (2003/04)",
            "FA Cup Winner (2x)",
            "World Cup Winner (2002)",
            "Copa América Winner (2007)"
        ]
    },
    {
        name: "Kolo Toure", season: "ICON", pos: "CB", stars: 3, ovr: 86, pac: 83, sho: 55, pas: 72, dri: 75, flag: "CI", avatar: "./pic/players/toure.jpg",
        general: {
            bio: "Kolo Touré was a bundle of energy and athleticism. Forming a rock-solid partnership with Campbell, he was versatile, quick, and tenacious.",
            history: "Signed for just £150k from ASEC Mimosas, Toure famously tackled Wenger in his trial. He developed into one of the best defenders in the league.",
            clubs: ["ASEC Mimosas", "Arsenal (2002-2009)", "Man City (2009-2013)", "Liverpool (2013-2016)"]
        },
        careerStats: [
            { season: "2003/04", comp: "Premier League", apps: 37, goals: 1, assists: 1 },
            { season: "2005/06", comp: "Premier League", apps: 33, goals: 0, assists: 0 },
            { season: "Overall", comp: "Arsenal Career", apps: 326, goals: 14, assists: 8 }
        ],
        achievements: [
            "Premier League Champion (2003/04)",
            "FA Cup Winner (2x)",
            "African Cup of Nations Winner (2015)"
        ]
    },
    {
        name: "Jens Lehmann", season: "ICON", pos: "GK", stars: 1, ovr: 87, pac: 78, sho: 50, pas: 85, dri: 72, flag: "DE", avatar: "./pic/players/lehmann.jpg",
        general: {
            bio: "Jens Lehmann was a charismatic and commanding goalkeeper. His presence and communication (often loud!) organized the Invincibles' defense.",
            history: "Signed to replace Seaman, Lehmann played every single league match of the unbeaten season. He holds the record for most consecutive clean sheets in the Champions League.",
            clubs: ["Schalke 04 (1988-1998)", "Dortmund (1999-2003)", "Arsenal (2003-2008)"]
        },
        careerStats: [
            { season: "2003/04", comp: "Premier League", apps: 38, goals: 0, assists: 0 },
            { season: "2005/06", comp: "Champions League", apps: 13, goals: 0, assists: 0 },
            { season: "Overall", comp: "Arsenal Career", apps: 200, goals: 0, assists: 0 }
        ],
        achievements: [
            "Premier League Champion (2003/04)",
            "FA Cup Winner (2005)",
            "UEFA Goalkeeper of the Year (1997, 2006)"
        ]
    },

    // --- Past Stars ---
    {
        name: "Cesc Fabregas", season: "LEG", pos: "CM", stars: 4, ovr: 90, pac: 78, sho: 84, pas: 95, dri: 88, flag: "ES", avatar: "./pic/players/fabregas.jpg",
        general: {
            bio: "Cesc Fàbregas was the heartbeat of Arsenal's midfield for nearly a decade. Endowed with incredible vision and passing range, he became one of the club's youngest ever captains.",
            history: "Poached from Barcelona's academy at 16, Fàbregas broke into the invincible era team. He evolved into a goalscoring midfielder and the team's talisman before returning to Barcelona.",
            clubs: ["Arsenal (2003-2011)", "Barcelona (2011-2014)", "Chelsea (2014-2019)", "Monaco (2019-2022)"]
        },
        careerStats: [
            { season: "2009/10", comp: "Premier League", apps: 27, goals: 15, assists: 13 },
            { season: "2007/08", comp: "Premier League", apps: 32, goals: 7, assists: 19 },
            { season: "Overall", comp: "Arsenal Career", apps: 303, goals: 57, assists: 92 }
        ],
        achievements: [
            "FA Cup Winner (2005)",
            "PFA Young Player of the Year (2007/08)",
            "World Cup Winner (2010 with Spain)"
        ]
    },
    {
        name: "Robin van Persie", season: "LEG", pos: "ST", stars: 4, ovr: 91, pac: 87, sho: 93, pas: 84, dri: 89, flag: "NL", avatar: "./pic/players/van_persie.jpg",
        general: {
            bio: "Robin van Persie evolved from a volatile winger into one of the most complete strikers in the world. His technique, volleying ability, and movement were world-class.",
            history: "Signed from Feyenoord, injuries hampered his early years. His final season at Arsenal was a masterpiece, winning the Golden Boot and PFA Player of the Year.",
            clubs: ["Feyenoord (2001-2004)", "Arsenal (2004-2012)", "Man Utd (2012-2015)"]
        },
        careerStats: [
            { season: "2011/12", comp: "Premier League", apps: 38, goals: 30, assists: 10 },
            { season: "2010/11", comp: "Premier League", apps: 25, goals: 18, assists: 7 },
            { season: "Overall", comp: "Arsenal Career", apps: 278, goals: 132, assists: 50 }
        ],
        achievements: [
            "FA Cup Winner (2005)",
            "Premier League Golden Boot (2011/12)",
            "PFA Players' Player of the Year (2011/12)"
        ]
    },
    {
        name: "Alexis Sanchez", season: "LEG", pos: "LW", stars: 4, ovr: 90, pac: 90, sho: 87, pas: 85, dri: 92, flag: "CL", avatar: "./pic/players/sanchez.jpg",
        general: {
            bio: "Alexis Sánchez was a whirlwind of energy and skill. A relentless presser and match-winner, he carried the team at times with his goals and assists.",
            history: "Signed from Barcelona in 2014, Alexis hit the ground running. He scored stunning goals in two FA Cup finals and was unstoppable in his prime.",
            clubs: ["Udinese (2006-2011)", "Barcelona (2011-2014)", "Arsenal (2014-2018)", "Man Utd (2018-2020)"]
        },
        careerStats: [
            { season: "2016/17", comp: "Premier League", apps: 38, goals: 24, assists: 10 },
            { season: "2014/15", comp: "Premier League", apps: 35, goals: 16, assists: 8 },
            { season: "Overall", comp: "Arsenal Career", apps: 166, goals: 80, assists: 45 }
        ],
        achievements: [
            "FA Cup Winner (2015, 2017)",
            "Copa América Winner (2x with Chile)",
            "PFA Fans' Player of the Year (2015)"
        ]
    },
    {
        name: "Mesut Özil", season: "LEG", pos: "CAM", stars: 5, ovr: 90, pac: 78, sho: 76, pas: 96, dri: 90, flag: "DE", avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p37605.png",
        general: {
            bio: "Mesut Özil was a playmaker of rare vision and touch. The 'Assist King', he could find passes that no one else saw. His arrival signaled the end of the austerity years.",
            history: "Arsenal smashed their transfer record to sign Özil from Real Madrid on deadline day 2013. He helped the club end a 9-year trophy drought in his first season.",
            clubs: ["Werder Bremen (2008-2010)", "Real Madrid (2010-2013)", "Arsenal (2013-2021)"]
        },
        careerStats: [
            { season: "2015/16", comp: "Premier League", apps: 35, goals: 6, assists: 19 },
            { season: "2013/14", comp: "Premier League", apps: 26, goals: 5, assists: 9 },
            { season: "Overall", comp: "Arsenal Career", apps: 254, goals: 44, assists: 75 }
        ],
        achievements: [
            "FA Cup Winner (4x)",
            "World Cup Winner (2014 with Germany)",
            "Arsenal Player of the Season (2015/16)"
        ]
    },
    {
        name: "Santi Cazorla", season: "LEG", pos: "CM", stars: 5, ovr: 88, pac: 80, sho: 82, pas: 90, dri: 91, flag: "ES", avatar: "./pic/players/cazorla.jpg",
        general: {
            bio: "Santi Cazorla is one of the most technically gifted players to ever play for Arsenal. Two-footed, diminutive, and always smiling, he could dictate play from deep or weave magic in the final third.",
            history: "Signed from Malaga, Cazorla became an instant hit. His free-kick in the 2014 FA Cup final sparked the comeback that saved Arsenal's season.",
            clubs: ["Villarreal (2003-2011)", "Malaga (2011-2012)", "Arsenal (2012-2018)", "Villarreal (2018-2020)"]
        },
        careerStats: [
            { season: "2012/13", comp: "Premier League", apps: 38, goals: 12, assists: 11 },
            { season: "2014/15", comp: "Premier League", apps: 37, goals: 7, assists: 11 },
            { season: "Overall", comp: "Arsenal Career", apps: 180, goals: 29, assists: 45 }
        ],
        achievements: [
            "FA Cup Winner (2x)",
            "Arsenal Player of the Season (2012/13)",
            "Euro Winner (2008, 2012 with Spain)"
        ]
    },
    {
        name: "Aaron Ramsey", season: "LEG", pos: "CM", stars: 3, ovr: 86, pac: 82, sho: 80, pas: 85, dri: 84, flag: "GB-WLS", avatar: "./pic/players/ramsey.jpg",
        general: {
            bio: "Aaron Ramsey developed into a dynamic box-to-box midfielder with a knack for scoring crucial goals. He will forever be remembered for his FA Cup final winners.",
            history: "Joining from Cardiff as a teenager, Ramsey overcame a horrific leg break to become a key player. He scored the winning goals in the 2014 and 2017 FA Cup finals.",
            clubs: ["Cardiff City (2006-2008)", "Arsenal (2008-2019)", "Juventus (2019-2022)"]
        },
        careerStats: [
            { season: "2013/14", comp: "Premier League", apps: 23, goals: 10, assists: 8 },
            { season: "2017/18", comp: "Premier League", apps: 24, goals: 7, assists: 8 },
            { season: "Overall", comp: "Arsenal Career", apps: 369, goals: 64, assists: 65 }
        ],
        achievements: [
            "FA Cup Winner (3x)",
            "Arsenal Player of the Season (2013/14, 2017/18)"
        ]
    },
    {
        name: "Jack Wilshere", season: "LEG", pos: "CM", stars: 4, ovr: 85, pac: 80, sho: 75, pas: 86, dri: 88, flag: "GB-ENG", avatar: "./pic/players/wilshere.jpg",
        general: {
            bio: "Jack Wilshere was a Hale End academy graduate who burst onto the scene with a fearless style of play. His performance against Barcelona at age 19 is legendary.",
            history: "Arsenal's youngest ever league debutant at the time. Injuries blighted his career, but his talent and connection with the fans were undeniable.",
            clubs: ["Arsenal (2008-2018)", "West Ham (2018-2020)"]
        },
        careerStats: [
            { season: "2010/11", comp: "Premier League", apps: 35, goals: 1, assists: 3 },
            { season: "2013/14", comp: "Premier League", apps: 24, goals: 3, assists: 4 },
            { season: "Overall", comp: "Arsenal Career", apps: 197, goals: 14, assists: 30 }
        ],
        achievements: [
            "FA Cup Winner (2x)",
            "PFA Young Player of the Year (2010/11)",
            "Arsenal Player of the Season (2010/11)"
        ]
    },
    {
        name: "Theo Walcott", season: "LEG", pos: "RW", stars: 3, ovr: 84, pac: 96, sho: 80, pas: 75, dri: 83, flag: "GB-ENG", avatar: "./pic/players/walcott.jpg",
        general: {
            bio: "Theo Walcott was a speedster who spent 12 years at the club. Often used on the wing or as a striker, he joined the exclusive 100-goal club.",
            history: "Signed from Southampton at 16, he went to the 2006 World Cup without playing a Premier League game. He scored many memorable goals, including a hat-trick against Newcastle.",
            clubs: ["Southampton (2005-2006)", "Arsenal (2006-2018)", "Everton (2018-2021)"]
        },
        careerStats: [
            { season: "2012/13", comp: "Premier League", apps: 32, goals: 14, assists: 10 },
            { season: "2016/17", comp: "Premier League", apps: 28, goals: 10, assists: 2 },
            { season: "Overall", comp: "Arsenal Career", apps: 397, goals: 108, assists: 78 }
        ],
        achievements: [
            "FA Cup Winner (3x)",
            "Community Shield Winner (2x)"
        ]
    },
    {
        name: "Olivier Giroud", season: "LEG", pos: "ST", stars: 3, ovr: 85, pac: 60, sho: 86, pas: 78, dri: 75, flag: "FR", avatar: "./pic/players/giroud.jpg",
        general: {
            bio: "Olivier Giroud was the ideal target man. Handsome and effective, his link-up play allowed midfielders to flourish, and he scored some spectacular goals, including the Scorpion King.",
            history: "Signed from Montpellier, Giroud was a consistent scorer. He won the Puskas Award for his scorpion kick goal against Crystal Palace.",
            clubs: ["Montpellier (2010-2012)", "Arsenal (2012-2018)", "Chelsea (2018-2021)", "AC Milan (2021 - Present)"]
        },
        careerStats: [
            { season: "2015/16", comp: "Premier League", apps: 38, goals: 16, assists: 6 },
            { season: "2013/14", comp: "Premier League", apps: 36, goals: 16, assists: 8 },
            { season: "Overall", comp: "Arsenal Career", apps: 253, goals: 105, assists: 41 }
        ],
        achievements: [
            "FA Cup Winner (3x)",
            "FIFA Puskas Award (2017)",
            "World Cup Winner (2018 with France)"
        ]
    },
    {
        name: "Laurent Koscielny", season: "LEG", pos: "CB", stars: 3, ovr: 86, pac: 82, sho: 50, pas: 75, dri: 74, flag: "FR", avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p51507.png",
        general: {
            bio: "Laurent Koscielny grew from an unknown signing into one of the league's best defenders. Fast, aggressive on the interception, and a leader at the back.",
            history: "Signed from Lorient, Koscielny overcame a difficult debut to become a mainstay. He scored the goal that ended the trophy drought in the 2014 FA Cup final.",
            clubs: ["Lorient (2009-2010)", "Arsenal (2010-2019)", "Bordeaux (2019-2022)"]
        },
        careerStats: [
            { season: "2015/16", comp: "Premier League", apps: 33, goals: 4, assists: 0 },
            { season: "2012/13", comp: "Premier League", apps: 34, goals: 2, assists: 1 },
            { season: "Overall", comp: "Arsenal Career", apps: 353, goals: 27, assists: 5 }
        ],
        achievements: [
            "FA Cup Winner (3x)",
            "Community Shield Winner (2x)"
        ]
    },
    {
        name: "Tomas Rosicky", season: "LEG", pos: "CAM", stars: 4, ovr: 85, pac: 80, sho: 80, pas: 88, dri: 87, flag: "CZ", avatar: "./pic/players/rosicky.jpg",
        general: {
            bio: "Tomas Rosicky, the 'Little Mozart', was a player of exquisite technique and vision. When fit, he orchestrated the midfield with his trademark outside-of-the-boot passes.",
            history: "Signed from Dortmund, Rosicky's Arsenal career was plagued by injuries, but his quality was never in doubt. He loved scoring against Tottenham.",
            clubs: ["Sparta Prague (1998-2001)", "Dortmund (2001-2006)", "Arsenal (2006-2016)"]
        },
        careerStats: [
            { season: "2013/14", comp: "Premier League", apps: 27, goals: 2, assists: 1 },
            { season: "2006/07", comp: "Premier League", apps: 26, goals: 3, assists: 4 },
            { season: "Overall", comp: "Arsenal Career", apps: 247, goals: 29, assists: 22 }
        ],
        achievements: [
            "FA Cup Winner (2x)"
        ]
    },
    {
        name: "Samir Nasri", season: "LEG", pos: "CAM", stars: 4, ovr: 86, pac: 84, sho: 80, pas: 87, dri: 89, flag: "FR", avatar: "./pic/players/nasri.jpg",
        general: {
            bio: "Samir Nasri was a gifted technician with excellent close control and dribbling skills. A creative force who could unlock tight defenses.",
            history: "Nasri joined from Marseille and had a standout season in 2010/11, earning a PFA nomination. His departure to Man City was controversial.",
            clubs: ["Marseille (2004-2008)", "Arsenal (2008-2011)", "Man City (2011-2017)"]
        },
        careerStats: [
            { season: "2010/11", comp: "Premier League", apps: 30, goals: 10, assists: 1 },
            { season: "2008/09", comp: "Premier League", apps: 29, goals: 6, assists: 2 },
            { season: "Overall", comp: "Arsenal Career", apps: 125, goals: 27, assists: 16 }
        ],
        achievements: [
            "French Player of the Year (2010)"
        ]
    },
    {
        name: "Gael Clichy", season: "LEG", pos: "LB", stars: 3, ovr: 84, pac: 90, sho: 60, pas: 78, dri: 82, flag: "FR", avatar: "./pic/players/clichy.jpg",
        general: {
            bio: "Gael Clichy was a lightning-fast left-back who learned his trade as Ashley Cole's understudy before making the position his own.",
            history: "The youngest member of the Invincibles squad, Clichy developed into a consistent performer known for his recovery pace.",
            clubs: ["Cannes (2002-2003)", "Arsenal (2003-2011)", "Man City (2011-2017)"]
        },
        careerStats: [
            { season: "2010/11", comp: "Premier League", apps: 33, goals: 0, assists: 1 },
            { season: "2007/08", comp: "Premier League", apps: 38, goals: 0, assists: 6 },
            { season: "Overall", comp: "Arsenal Career", apps: 264, goals: 2, assists: 11 }
        ],
        achievements: [
            "Premier League Champion (2003/04)",
            "FA Cup Winner (2005)",
            "PFA Team of the Year (2007/08)"
        ]
    },
    {
        name: "Bacary Sagna", season: "LEG", pos: "RB", stars: 3, ovr: 84, pac: 84, sho: 60, pas: 78, dri: 76, flag: "FR", avatar: "./pic/players/sagna.jpg",
        general: {
            bio: "Bacary Sagna was 'Mr. Reliable'. A defensively astute right-back who was rarely beaten in one-on-one situations and provided consistent deliveries.",
            history: "Signed from Auxerre, Sagna became a fixture in the team for seven years. He recovered from two broken legs to win the FA Cup in his final game.",
            clubs: ["Auxerre (2004-2007)", "Arsenal (2007-2014)", "Man City (2014-2017)"]
        },
        careerStats: [
            { season: "2010/11", comp: "Premier League", apps: 33, goals: 1, assists: 3 },
            { season: "2007/08", comp: "Premier League", apps: 29, goals: 1, assists: 4 },
            { season: "Overall", comp: "Arsenal Career", apps: 284, goals: 5, assists: 22 }
        ],
        achievements: [
            "FA Cup Winner (2014)",
            "PFA Team of the Year (2007/08, 2010/11)"
        ]
    },
    {
        name: "Wojciech Szczesny", season: "LEG", pos: "GK", stars: 1, ovr: 85, pac: 80, sho: 50, pas: 80, dri: 72, flag: "PL", avatar: "./pic/players/szczesny.jpg",
        general: {
            bio: "Wojciech Szczesny was a confident and talented goalkeeper who came through the academy. A big personality, he established himself as No. 1 at a young age.",
            history: "Szczesny won the Premier League Golden Glove in 2013/14. He left for Juventus to become Buffon's successor.",
            clubs: ["Arsenal (2009-2017)", "Brentford (Loan)", "Roma (Loan)", "Juventus (2017 - Present)"]
        },
        careerStats: [
            { season: "2013/14", comp: "Premier League", apps: 37, goals: 0, assists: 0 },
            { season: "2011/12", comp: "Premier League", apps: 38, goals: 0, assists: 0 },
            { season: "Overall", comp: "Arsenal Career", apps: 181, goals: 0, assists: 0 }
        ],
        achievements: [
            "FA Cup Winner (2x)",
            "Premier League Golden Glove (2013/14)"
        ]
    },
    {
        name: "Lukas Podolski", season: "LEG", pos: "LM", stars: 3, ovr: 84, pac: 85, sho: 90, pas: 78, dri: 80, flag: "DE", avatar: "./pic/players/podolski.jpg",
        general: {
            bio: "Lukas Podolski possessed a hammer of a left foot. efficient and clinical, he was a fan favorite for his positive attitude and powerful finishing.",
            history: "Signed from Cologne, Podolski scored on his debut. He was part of the team that ended the trophy drought in 2014.",
            clubs: ["Cologne (2003-2006, 2009-2012)", "Bayern Munich (2006-2009)", "Arsenal (2012-2015)"]
        },
        careerStats: [
            { season: "2012/13", comp: "Premier League", apps: 33, goals: 11, assists: 9 },
            { season: "2013/14", comp: "Premier League", apps: 20, goals: 8, assists: 4 },
            { season: "Overall", comp: "Arsenal Career", apps: 82, goals: 31, assists: 17 }
        ],
        achievements: [
            "FA Cup Winner (2014)",
            "World Cup Winner (2014 with Germany)"
        ]
    },
    {
        name: "Per Mertesacker", season: "LEG", pos: "CB", stars: 2, ovr: 84, pac: 35, sho: 40, pas: 65, dri: 50, flag: "DE", avatar: "./pic/players/mertesacker.jpg",
        general: {
            bio: "Per Mertesacker, the 'BFG', compensated for a lack of pace with incredible reading of the game and positioning. A towering leader who is now the Academy Manager.",
            history: "Signed on D-Day 2011 after the 8-2 loss, Mertesacker stabilized the defense. His performance in the 2017 FA Cup Final vs Chelsea was legendary.",
            clubs: ["Hannover 96 (2003-2006)", "Werder Bremen (2006-2011)", "Arsenal (2011-2018)"]
        },
        careerStats: [
            { season: "2012/13", comp: "Premier League", apps: 34, goals: 3, assists: 0 },
            { season: "2013/14", comp: "Premier League", apps: 35, goals: 2, assists: 1 },
            { season: "Overall", comp: "Arsenal Career", apps: 221, goals: 10, assists: 3 }
        ],
        achievements: [
            "FA Cup Winner (3x)",
            "World Cup Winner (2014 with Germany)"
        ]
    },
    {
        name: "Alex Lacazette", season: "LEG", pos: "ST", stars: 4, ovr: 85, pac: 84, sho: 85, pas: 78, dri: 85, flag: "FR", avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p59966.png",
        general: {
            bio: "Alexandre Lacazette was a clinical finisher and intelligent link-up player. His bromance with Aubameyang and fighting spirit endeared him to fans.",
            history: "Signed from Lyon for a club record, Lacazette scored quickly in the Premier League. He was named Player of the Season in 2019.",
            clubs: ["Lyon (2010-2017, 2022 - Present)", "Arsenal (2017-2022)"]
        },
        careerStats: [
            { season: "2017/18", comp: "Premier League", apps: 32, goals: 14, assists: 4 },
            { season: "2018/19", comp: "Premier League", apps: 35, goals: 13, assists: 8 },
            { season: "Overall", comp: "Arsenal Career", apps: 206, goals: 71, assists: 36 }
        ],
        achievements: [
            "FA Cup Winner (2020)",
            "Arsenal Player of the Season (2018/19)"
        ]
    },
    {
        name: "Pierre-Emerick Aubameyang", season: "LEG", pos: "ST", stars: 4, ovr: 89, pac: 96, sho: 88, pas: 75, dri: 84, flag: "GA", avatar: "./pic/players/aubameyang.jpg",
        general: {
            bio: "Pierre-Emerick Aubameyang was a world-class goalscorer. His blistering pace and instinctive finishing brought him the Golden Boot and FA Cup glory.",
            history: "Signed from Dortmund, Auba had an incredible start to his Arsenal career. He single-handedly won the 2020 FA Cup with braces in the semi-final and final.",
            clubs: ["Saint-Étienne (2011-2013)", "Dortmund (2013-2018)", "Arsenal (2018-2022)", "Barcelona (2022)", "Chelsea (2022-2023)"]
        },
        careerStats: [
            { season: "2018/19", comp: "Premier League", apps: 36, goals: 22, assists: 5 },
            { season: "2019/20", comp: "Premier League", apps: 36, goals: 22, assists: 3 },
            { season: "Overall", comp: "Arsenal Career", apps: 163, goals: 92, assists: 21 }
        ],
        achievements: [
            "FA Cup Winner (2020)",
            "Premier League Golden Boot (2018/19)",
            "Arsenal Player of the Season (2019/20)"
        ]
    },
    {
        name: "Granit Xhaka", season: "LEG", pos: "CDM", stars: 3, ovr: 84, pac: 60, sho: 75, pas: 86, dri: 78, flag: "CH", avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p84450.png",
        general: {
            bio: "Granit Xhaka was a midfield general with a rocket of a left foot. His Arsenal career was a rollercoaster, but he left as a cult hero after a superb final season.",
            history: "Signed from Gladbach, Xhaka was a polarizing figure. His redemption arc saw him become a key leader under Arteta before moving to Leverkusen to win the league.",
            clubs: ["Basel (2010-2012)", "Mönchengladbach (2012-2016)", "Arsenal (2016-2023)", "Bayer Leverkusen (2023 - Present)"]
        },
        careerStats: [
            { season: "2022/23", comp: "Premier League", apps: 37, goals: 7, assists: 7 },
            { season: "2016/17", comp: "Premier League", apps: 32, goals: 2, assists: 2 },
            { season: "Overall", comp: "Arsenal Career", apps: 297, goals: 23, assists: 29 }
        ],
        achievements: [
            "FA Cup Winner (2x)",
            "Community Shield Winner (2x)"
        ]
    },
    {
        name: "Kieran Tierney", season: "23", pos: "LB", stars: 3, ovr: 81, pac: 86, sho: 65, pas: 78, dri: 80, flag: "GB-SCT", avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p192895.png",
        general: {
            bio: "Kieran Tierney is an old-school defender with a modern attacking threat. Known for his commitment (wearing short sleeves in snow), he quickly became a fan favorite.",
            history: "Tierney joined from Celtic and made an immediate impact with his overlapping runs and crossing. Injuries have hindered his progress recently.",
            clubs: ["Celtic (2015-2019)", "Arsenal (2019 - Present)", "Real Sociedad (Loan)"]
        },
        careerStats: [
            { season: "2020/21", comp: "Premier League", apps: 27, goals: 1, assists: 3 },
            { season: "2021/22", comp: "Premier League", apps: 22, goals: 1, assists: 3 },
            { season: "Overall", comp: "Arsenal Career", apps: 124, goals: 5, assists: 14 }
        ],
        achievements: [
            "FA Cup Winner (2020)",
            "Community Shield Winner (2020, 2023)"
        ]
    },
    {
        name: "Emile Smith Rowe", season: "23", pos: "CAM", stars: 4, ovr: 80, pac: 82, sho: 75, pas: 82, dri: 85, flag: "GB-ENG", avatar: "./pic/players/smith_rowe.jpg",
        general: {
            bio: "Emile Smith Rowe, the 'Croydon De Bruyne', is a Hale End graduate known for his intelligent movement and ability to carry the ball. He and Saka represent the new Arsenal generation.",
            history: "Bursting onto the scene in late 2020, Smith Rowe's introduction helped turn Arsenal's season around. He scored 10 league goals in 2021/22.",
            clubs: ["Arsenal (2018 - Present)", "RB Leipzig (Loan)", "Huddersfield (Loan)"]
        },
        careerStats: [
            { season: "2021/22", comp: "Premier League", apps: 33, goals: 10, assists: 2 },
            { season: "2020/21", comp: "Premier League", apps: 20, goals: 2, assists: 4 },
            { season: "Overall", comp: "Arsenal Career", apps: 115, goals: 18, assists: 13 }
        ],
        achievements: [
            "U17 World Cup Winner (2017)",
            "Community Shield Winner (2020, 2023)"
        ]
    },
];
