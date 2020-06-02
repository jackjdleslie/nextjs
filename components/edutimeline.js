const timelineData = [
    {
        text: '(pending) Began studying MSc Advanced Computer Science at Imperial College London',
        date: 'October 03 2020',
        category: {
            tag: 'postgraduate',
            color: '#e17b77'
        },
        link: {
            url: 'https://www.imperial.ac.uk/study/pg/computing/advanced-computing/',
            text: 'See program details here'
        }
    },
    {
        text: 'Graduated from the University of St Andrews with (pending) First Class degree',
        date: 'June 25 2020',
        category: {
            tag: 'undergraduate',
            color: '#1DA1F2'
        },
    },
    {
        text: 'Awarded ScottishPower Masters Scholarship to study at Imperial College London',
        date: 'June 02 2020',
        category: {
            tag: 'postgraduate',
            color: '#e17b77'
        },
        link: {
            url: 'https://www.scottishpower.com/pages/scottishpower_masters_scholarships.aspx',
            text: 'See program details here'
        }
    },
    {
        text: 'Created first public GitHub repository & started working on this website',
        date: 'May 23 2020',
        category: {
            tag: 'side-projects',
            color: '#f5d60f'
        },
        link: {
            url: 'https://github.com/arianehine/nextjs',
            text: 'Check out the repository here'
        }
    },
    {
        text:
            'Achieved Dean\'s list award',
        date: 'June 2019',
        category: {
            tag: 'undergraduate',
            color: '#1DA1F2'
        },
    },
    {
        text:
            'Achieved Dean\'s list award',
        date: 'June 2017',
        category: {
            tag: 'undergraduate',
            color: '#1DA1F2'
        },
    },
    {
        text:
            'Began studying BSc Computer Science at the University of St Andrews',
        date: 'September 7 2016',
        category: {
            tag: 'undergraduate',
            color: '#1DA1F2'
        },
        link: {
            url: 'https://www.st-andrews.ac.uk/subjects/computer-science/computer-science-bsc/',
            text: 'See program details here'
        }
    },
    {
        text: 'Graduated from St. Aloysius\' College',
        date: 'June 2016',
        category: {
            tag: 'school',
            color: '#018f69'
        },
    },
    {
        text: 'Achieved 3 Advanced Highers at grade A',
        date: 'June 2016',
        category: {
            tag: 'school',
            color: '#018f69'
        },
    },
    {
        text: 'Achieved 5 Highers at grade A',
        date: 'June 2015',
        category: {
            tag: 'school',
            color: '#018f69'
        },
    },
    {
        text: 'Achieved 8 Intermediate 2s at grade A, and 1 GCSE at grade A',
        date: 'June 2014',
        category: {
            tag: 'school',
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
