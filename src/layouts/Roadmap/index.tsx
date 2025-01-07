import React from 'react'
import './RoadMap.css'

const Roadmap = () => {

    const roadmapSteps = [
        {
            id: 1,
            title: "Phase 1",
            items: [
                "Launch",
                "DEX listings",
                "1,000+ holders",
                "MSS community takeover",
            ],
        },
        {
            id: 2,
            title: "Phase 2",
            items: [
                "CEX listings",
                "$MSS normie takeover",
                "Strategic partnerships",
                "10,000+ holders",
            ],
        },
        {
            id: 3,
            title: "Phase 3",
            items: [
                "Tier 1 exchange listings",
                "MSS Official Merch",
                "50,000+ holders",
            ],
        },
        {
            id: 4,
            title: "Phase 4: Optimization and Expansion",
            items: [
                "MSS's NFT collection",
                "100,000+ holders",
                "$MSS world domination",
            ],
        },
    ];
    return (
        <div id='roadmap' className='roadmap-section'>
            <div className='roadmap-title'>
                <h1 className='title-text'>ROADMAP</h1>
                <div className='title-underline'></div>
            </div>
            <div className="roadmap-container">
                <ul className="timeline">
                    <li>
                        <div className='timeline-item'>
                            <h1>PHASE 1</h1>
                            <div className='timeline-item-content'>
                                {roadmapSteps[0].items.map((item, index) => (
                                    <p key={index}>- {item}</p>
                                ))}
                            </div>
                        </div>
                    </li>
                    <li>
                    <div className='timeline-item'>
                            <h1>PHASE 2</h1>
                            <div className='timeline-item-content'>
                                {roadmapSteps[1].items.map((item, index) => (
                                    <p key={index}>- {item}</p>
                                ))}
                            </div>
                        </div>
                    </li>
                    <li>
                    <div className='timeline-item'>
                            <h1>PHASE 3</h1>
                            <div className='timeline-item-content'>
                                {roadmapSteps[2].items.map((item, index) => (
                                    <p key={index}>- {item}</p>
                                ))}
                            </div>
                        </div>
                    </li>
                    <li>
                    <div className='timeline-item'>
                            <h1>PHASE 4</h1>
                            <div className='timeline-item-content'>
                                {roadmapSteps[3].items.map((item, index) => (
                                    <p key={index}>- {item}</p>
                                ))}
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Roadmap