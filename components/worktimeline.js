const timelineData = [

    {
        text: 'Finished Internship at J.P.Morgan',
        date: 'August 08 2020',
        category: {
            tag: 'J.P.Morgan',
            color: '#e17b77'
        },
    },
    {
        text: 'Joined ScottishPower as a Masters Scholar',
        date: 'June 02 2020',
        category: {
            tag: 'ScottishPower',
            color: '#f5d60f'
        },

    },
    {
        text: 'Began 5 week Virtual Summer Technology Internship Program at J.P.Morgan',
        date: 'June 22 2020',
        category: {
            tag: 'J.P.Morgan',
            color: '#e17b77'
        },
    },
    {
        text: 'Finished Internship at J.P.Morgan Glasgow',
        date: 'August 23 2019',
        category: {
            tag: 'J.P.Morgan',
            color: '#e17b77'
        },
    },
    {
        text: 'Began 10 week Summer Technology Internship Program at J.P.Morgan Glasgow',
        date: 'June 17 2019',
        category: {
            tag: 'J.P.Morgan',
            color: '#e17b77'
        },
    },
    {
        text:
            'Left Clarks Glasgow to return to university',
        date: 'December 2019',
        category: {
            tag: 'C&J clark',
            color: '#1DA1F2'
        },

    },
    {
        text:
            'Began working at Clarks Glasgow as a Christmas Sales Team Member',
        date: 'December 2018',
        category: {
            tag: 'C&J clark',
            color: '#1DA1F2'
        },

    },
    {
        text:
            'Left Clarks Glasgow to return to university',
        date: 'June 2018',
        category: {
            tag: 'C&J clark',
            color: '#1DA1F2'
        },

    },
    {
        text:
            'Began working at Clarks Glasgow as a Summer Sales Team Member',
        date: 'June 2018',
        category: {
            tag: 'C&J clark',
            color: '#1DA1F2'
        },

    },
    {
        text:
            'Left Clarks St. Andrews to return home from university',
        date: 'May 2018',
        category: {
            tag: 'C&J clark',
            color: '#1DA1F2'
        },

    },
    {
        text:
            'Began working at Clarks St. Andrews as a permanent Sales Team Member',
        date: 'September 2017',
        category: {
            tag: 'C&J clark',
            color: '#1DA1F2'
        },

    },
    {
        text:
            'Left Clarks Glasgow to return to university',
        date: 'August 2017',
        category: {
            tag: 'C&J clark',
            color: '#1DA1F2'
        },

    },
    {
        text:
            'Began working at Clarks Glasgow as a Summer Sales Team Member',
        date: 'June 2017',
        category: {
            tag: 'c&j clark',
            color: '#1DA1F2'
        },

    },
    {
        text: 'Left Dunnes Stores to begin university',
        date: 'August 2016',
        category: {
            tag: 'Dunnes',
            color: '#018f69'
        },
    },
    {
        text: 'Began working at Dunnes Stores as a Sales Assistant, age 16',
        date: 'November 2015',
        category: {
            tag: 'Dunnes',
            color: '#018f69'
        },
    }
]

const TimelineItem = ({data}) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag" style={{background: data.category.color}}>
                {data.category.tag}
            </span>
            <time>{data.date}</time>
            <p>{data.text}</p>
            {data.link && (
                <a
                    href={data.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {data.link.text}
                </a>
            )}
            <span className="circle"/>
        </div>
    </div>
);

export default function Timeline({}) {
    return (
        timelineData.length > 0 && (
            <div className="timeline-container">
                {timelineData.map((data, idx) => (
                    <TimelineItem data={data} key={idx}/>
                ))}
            </div>
        ));
}
