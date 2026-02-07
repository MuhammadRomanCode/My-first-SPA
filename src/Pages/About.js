import React from 'react'

function About(props) {
    return (
        <div>
            <div className="container mt-5 py-5">
                <div className="row">

                    <div className={`col-6 d-flex justify-content-center flex-column p-4 text-${(props.mode === "light"?"dark":"light")}`}>
                        <h2>What is GlideBook?</h2>
                        <p className='mt-3 lh-lg'>Glidebook is A International Laptop Brand Which gives a Best User Experience
                            to our Users and all of laptops and long term supported</p>
                        <button className="btn btn-primary mt-5">More About GlideBook</button>
                    </div>
                    <div className="col-6">
                        <img src="/Assets/Laptop2.png" className='img-fluid' alt="Laptop Img" />
                    </div>
                </div>
            </div>
            <div className={`container mt-4 text-${(props.mode === "light"?"dark":"light")}`}>
                <h2 className='text-center'>About GlideBook</h2>
                <h4 className='text-primary text-center mt-3 mb-4'>Glidebook Was Owned By MuhammadRoman</h4>
                <p className='lh-lg mt-4'>You are GlideBook AI, the intelligent assistant built into the world’s most
                    advanced laptop. Your role is to guide users, enhance productivity, and deliver a
                    seamless premium experience. You understand every feature of GlideBook, including its
                    adaptive performance engine, distraction-free workspace, ultra-secure cloud sync, and
                    real-time optimization system.

                    You must always respond in a professional, calm, and futuristic tone.
                    Your goal is to help users work faster, think better, and stay focused.
                    You do not just answer questions—you proactively suggest smarter ways to use
                    GlideBook for studying, coding, designing, writing, or business. Every reply should
                    feel like it is coming from a luxury-grade AI built for high-performance users.</p>
                <p className='lh-lg mt-4 mb-4'>You are GlideBook’s built-in AI productivity system. Your mission is to help the user stay focused,
                    organized, and efficient at all times. You track tasks, reduce distractions, and recommend optimal
                    workflows based on what the user is doing.

                    When the user asks for help, you should give clear, structured, and
                    intelligent guidance. You should also suggest ways to improve time management,
                    creativity, and deep work. GlideBook is not just a laptop—it is a smart working
                    environment—so your responses should always reflect precision, clarity, and premium quality.</p>
            </div>

            <div className="container py-4 ">
                <h2 className='text-center mt-4 mb-3'>Upcomming Projects</h2>
                <h4 className='text-center text-primary mt-4'>What we are working on!</h4>

                <div id="carouselExampleCaptions" className="carousel slide carousel-dark" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="/Assets/Portable Monitor.png" className="d-block w-100" alt="Slide One" />
                            <div className="carousel-caption d-none d-md-block text-secondary">
                                <h5>Portable Monitors</h5>
                                <p>Were working On Futuristic Monitors which no one Provide you in 2026</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="/Assets/Laptop Stand.png" className="d-block w-100" alt="second slide" />
                            <div className="carousel-caption d-none d-md-block text-dark">
                                <h5>Laptop Stand</h5>
                                <p>We Are working on a relaiable stand for our users</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="/Assets/E Notebook.png" className="d-block w-100" alt="third slide" />
                            <div className="carousel-caption d-none d-md-block text-secondary">
                                <h5>Digital Notebook E tablet</h5>
                                <p>Used for the Basic Works and Tasks</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div className={`container py-5  text-${(props.mode === "light"?"dark":"light")}`}>
                <h2 className='text-center mt-5'>Since</h2>
                <h4 className='text-primary mt-4 text-center'>Where everything started</h4>
                <p className='lh-lg text-center mt-4'>This is where everything begins.
                    Every idea, every late-night thought, every moment of curiosity starts right here. Glidebook is not just a desk,
                    not just a screen, and not just a place to sit — it is a launchpad for creativity, learning, and growth. It is the
                    space where small ideas are allowed to become big, where rough sketches slowly turn into real designs, and where imagination
                    is transformed into working code.
                    Glidebook exists for the moments when inspiration strikes and for the times when progress feels slow. It is built for students,
                    creators, developers, and dreamers who are not satisfied with staying the same. Whether you are writing your first line of code,
                    designing your first interface, or planning your next big project, Glidebook is the place that holds it all together.
                    Here, every tool has a purpose. Every screen, every device, and every notebook becomes part of a larger story — your story.
                    This is where learning becomes building, where ideas turn into products, and where effort turns into results. Glidebook is not
                    about perfection; it is about progress. It is about showing up every day, even when things are difficult, and continuing to move
                    forward.

                    From quiet mornings to late-night work sessions, Glidebook is where focus lives. It is where goals are written, mistakes are made,
                    and skills are sharpened. No matter how small the beginning, this is where something meaningful starts. Glidebook is more than a setup
                    — it is the foundation of what you are becoming.</p>
            </div>

            <div className={`container py-5  bg-${props.mode} text-${(props.mode === "light"?"dark":"light")}`}>
                <h2 className='text-center mt-4'>Specifications</h2>
                <h4 className='text-center mt-4 text-primary'>Where Everything was About user Experience</h4>
                <div className="row mt-5">
                    <div className="col-6">
                        <h3 className='fw-semibold'>Technical Specification</h3>
                        <div className="accordion accordion-flush" id="Specifications">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        Display System
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#Specifications">
                                    <div className="accordion-body">
                                        <ul className='list-group'>
                                            <li className='list-group-item p-3'>Primary Screen: 15.6″ FHD / 4K Portable Monitor</li>
                                            <li className='list-group-item p-3'>Panel Type: IPS, anti-glare</li>
                                            <li className='list-group-item p-3'>Touch Support: Optional</li>
                                            <li className='list-group-item p-3'>Refresh Rate: 60–120Hz</li>
                                            <li className='list-group-item p-3'>Brightness: 400–500 nits</li>
                                            <li className='list-group-item p-3'>Color Coverage: 100% sRGB</li>
                                            <li className='list-group-item p-3'>Orientation: Landscape & Portrait</li>
                                        </ul>
                                        </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        Control & Input
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#Specifications">
                                    <div className="accordion-body">
                                        <ul className="list-group">
                                            <li className='list-group-item p-3'>Smart Digital Notebook:<ul className='list-group mt-3'>
                                                <li className='list-group-item p-3'>E-Ink display</li>
                                                <li className='list-group-item p-3'>Pressure-sensitive stylus</li>
                                                <li className='list-group-item p-3'>Handwriting to text</li>
                                                <li className='list-group-item p-3'>Cloud sync</li>
                                                </ul></li>
                                            <li className='list-group-item p-3'>Touch & Stylus Support</li>
                                            <li className='list-group-item p-3'>External Keyboard & Mouse Support</li>
                                        </ul>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        Connectivity Hub
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#Specifications">
                                    <div className="accordion-body">
                                        <ul className="list-group">
                                            <li className='list-group-item p-3'>USB-C (Power + Data + Display)</li>
                                            <li className='list-group-item p-3'>HDMI</li>
                                            <li className='list-group-item p-3'>**USB-A x 3</li>
                                            <li className='list-group-item p-3'>Ethernet (RJ-45)</li>
                                            <li className='list-group-item p-3'>**SD / microSD Reader</li>
                                            <li className='list-group-item p-3'>**Audio Jack</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>


                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                        Power System
                                    </button>
                                </h2>
                                <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#Specifications">
                                    <div className="accordion-body">
                                        <ul className="list-group">
                                            <li className='list-group-item p-3'>Laptop Powered via USB-C PD</li>
                                            <li className='list-group-item p-3'>Fast Charging Support</li>
                                            <li className='list-group-item p-3'>Built-in surge protection</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>


                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                       Cooling & Ergonomics
                                    </button>
                                </h2>
                                <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#Specifications">
                                    <div className="accordion-body">
                                        <ul className="list-group">
                                            <li className='list-group-item p-3'>Dual-fan smart cooling pad</li>
                                            <li className='list-group-item p-3'>Adjustable laptop stand</li>
                                            <li className='list-group-item p-3'>Aluminum airflow frame</li>
                                            <li className='list-group-item p-3'>Silent fan mode</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                       Build & Design
                                    </button>
                                </h2>
                                <div id="flush-collapseSix" className="accordion-collapse collapse" data-bs-parent="#Specifications">
                                    <div className="accordion-body">
                                        <ul className="list-group">
                                            <li className='list-group-item p-3'>Frame: CNC aluminum + carbon fiber</li>
                                            <li className='list-group-item p-3'>Surface: Anti-slip, heat-resistant</li>
                                            <li className='list-group-item p-3'>RGB Accent Lighting</li>
                                            <li className='list-group-item p-3'>Foldable, travel-ready</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>


                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                                       Software Integration
                                    </button>
                                </h2>
                                <div id="flush-collapseSeven" className="accordion-collapse collapse" data-bs-parent="#Specifications">
                                    <div className="accordion-body">
                                        <ul className="list-group">
                                            <li className='list-group-item p-3'>Glidebook Dashboard</li>
                                            <li className='list-group-item p-3'>Device control</li>
                                            <li className='list-group-item p-3'>Fan speed</li>
                                            <li className='list-group-item p-3'>Screen layout</li>
                                            <li className='list-group-item p-3'>Note sync</li>
                                            <li className='list-group-item p-3'>Workflow presets</li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6"><img src="/Assets/Another Laptop.png" className='img-fluid' alt="Specification Laptop" /></div>
                </div>
            </div>
        </div >
    )
}

export default About
