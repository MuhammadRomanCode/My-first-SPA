import React, { useState } from 'react';

function Glidebook(props) {
  const [products] = useState([
    { id: 1, name: "Digital Notebook", price: "$20", image: "/Assets/Product2.jpg" },
    { id: 2, name: "E-Planner", price: "$15", image: "Assets/product1.jpg" },
    { id: 3, name: "Focus Timer", price: "$10", image: "/Assets/Product3.jpg" },
    { id: 4, name: "Focus Timer", price: "$10", image: "/Assets/Product4.jpg" },
    { id: 5, name: "Focus Timer", price: "$10", image: "/Assets/Product5.jpg" },
    { id: 6, name: "Focus Timer", price: "$10", image: "/Assets/Product6.jpg" },
  ]);

  const [Clients] = useState([
    {id: 1, name: "johnDoe",title: "Frontend Developer", message: "Glidebook completely changed how I work. Having a portable screen and digital notebook together makes everything faster and more organized. I feel more focused every day", img: "/Assets/person1.jpg"},
    {id: 1, name: "Sarah M",title: "UI Designer", message: "I love how clean and modern my workspace looks now. Glidebook makes my desk feel like a creative studio instead of just a table with a laptop." ,img: "/Assets/person2.jpg"},
    {id: 1, name: "Ali K",title: "Computer Science Student", message: "Before Glidebook, I was always switching between tabs and notebooks. Now everything is right in front of me. Studying and coding feels much easier." ,img: "/Assets/person3.jpg"},
    {id: 1, name: "Noor A",title: "Contact Creator", message: "The digital notebook is amazing. I can write ideas while editing videos on my laptop. It’s smooth, simple, and very satisfying to use.", img: "/Assets/Person4.jpg"},
    {id: 1, name: "johnDoe",title: "Hamza T.", message: "Glidebook gave me a professional setup without needing a big office. I can work anywhere and still feel like I’m at a real workstation", img: "/Assets/person5.jpg"},
  ]);

  return (
    <div>
      <div className={`container mt-5 p-5 text-${(props.mode === "light"?"dark":"light")}`}>
        <img src="/Assets/Glidebook.png" className='img-fluid' alt="Glidebook img" />
        <h2 className='text-center'>Glidebook where Everything begins</h2>
        <p className='mt-4 lh-lg'>This is where everything begins.
          Every idea, every late-night thought, every moment of curiosity starts right here.
          Glidebook is not just a desk, not just a screen, and not just a place to sit — it is a
          launchpad for creativity, learning, and growth. It is the space where small ideas are
          allowed to become big, where rough sketches slowly turn into real designs, and where imagination
          is transformed into working code.
          Glidebook exists for the moments when inspiration strikes and for the times when progress feels slow.
          It is built for students, creators, developers, and dreamers who are not satisfied with staying the same.
          Whether you are writing your first line of code, designing your first interface, or planning your next big project,
          Glidebook is the place that holds it all together.
          Here, every tool has a purpose. Every screen, every device, and every notebook becomes part of a larger story
          — your story. This is where learning becomes building, where ideas turn into products, and where effort turns
          into results. Glidebook is not about perfection; it is about progress. It is about showing up every day, even
          when things are difficult, and continuing to move forward.
          From quiet mornings to late-night work sessions, Glidebook is where focus lives.
          It is where goals are written, mistakes are made, and skills are sharpened. No matter how small the beginning,
          this is where something meaningful starts. Glidebook is more than a setup — it is the foundation of what you are becoming.</p>
      </div>
      <div className="container-fluid d-flex justify-content-center align-items-center mt-5 py-5 min-vh-100 flex-column">
        <h2 className="mb-4">Our Recent Products</h2>


        <div className="container">
          <div className="row w-100 justify-content-center">
            {products.map((product) => (
              <div key={product.id} className="col-md-4 col-lg-3 mb-4 p-3">
                <div className="card h-100 shadow-sm p-3 d-flex flex-column">

                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.name}
                    style={{ height: '200px', objectFit: 'contain' }}
                  />

                  <div className="card-body mt-auto d-flex flex-column p-0 pt-3">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text text-muted">{product.price}</p>
                    <button className="btn btn-primary w-100">View Product</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`container mt-5 p-5  text-${(props.mode === "light"?"dark":"light")}`}>
        <h2 className='text-center'>Our Recent Blogs</h2>
        <div className="row">
          <div className="col-12 row gap-2 mt-5 py-5 border">
            <img src="/Assets/blog1.jpg" className='col-12 col-lg-5' alt="blog no 1" />
            <div className="texts col-12 col-lg-6">
              <p className='p-2 text-secondary'>Customer Story</p>
              <h3 className='mx-3'>How a Clean Workspace Improves Your Focus</h3>
              <p className='lh-lg'>Your workspace is more than just a place to keep your laptop.
                It directly affects how you think, how you work, and how productive you are. A clean,
                well-organized setup helps reduce mental stress and keeps you focused on what really matters.

                When your desk is messy, your brain has to process too many visual signals.
                This makes it harder to concentrate. A simple, minimal setup like Glidebook creates a calm environment where
                your mind can stay clear. You don’t waste time searching for cables, notebooks, or tools — everything has a place.

                With tools like a laptop stand, digital notebook, and portable monitor, your workflow becomes smoother.
                You can write, code, and research at the same time without switching devices constantly.
                This saves energy and keeps you in a productive state for longer periods.

                A clean workspace is not about being perfect — it’s about making it easy to focus.
                And when you can focus, you can build anything.</p>
            </div>
          </div>
          <div className="col-6 border mt-5 justify-content-center d-flex flex-column">
            <img src="/Assets/blog2.jpg" alt="blogno 2" />
            <div className="texts p-3">
              <h3>Why Portable Monitors Are the Future of Work</h3>
              <p>The way people work has changed. We no longer sit at one desk all day. We work from home,
                cafés, libraries, and even while traveling. That’s why portable monitors are becoming so important.

                A portable monitor instantly doubles your screen space.
                You can code on one screen and watch tutorials on the other. You can design on one side and keep notes open on the other.
                This saves time and makes your workflow faster and smoother.

                Glidebook uses portable displays to turn any place into a professional workspace.
                You don’t need a big desk or a heavy monitor — you just plug in and start working.

                This is the future of productivity: flexible, mobile, and powerful.</p>
            </div>
          </div>
          <div className="col-6 mt-5 d-flex flex-column justify-content-center border">
            <img src="/Assets/blog3.jpg" alt="blog no 3" />
            <h3 className='mt-3'>Digital Notes vs Paper Notes</h3>
            <p className='lh-lg p-2'>Paper notebooks are great, but they have limits. Pages get lost, ink fades, and you can’t
              search your notes. Digital notebooks change everything.

              With a smart digital notebook, you can write like normal, but your notes are saved forever. You can organize them, back them up,
              and access them from your laptop anytime. You can even convert handwriting into text.

              Glidebook combines traditional writing with modern technology, giving you the best of both worlds. You think better
              when you write, and you work faster when everything is digital.</p>
          </div>
        </div>
      </div>

      <div className={`container p-5  text-${(props.mode === "light"?"dark":"light")}`}>
        <h2 className='text-center my-5 '>What Our Client Says</h2>
        <div className="row justify-content-center">
        {Clients.map((client)=>(
          <div className="col-3 border p-3 rounded-2 m-2">
          <h2 className='mt-2 d-flex gap-3'><img src={client.img} className='rounded-5' height={"80px"} alt="Person" /><p className='mt-2'>{client.name}</p></h2>
          <h4 className='mt-3'>{client.title}</h4>
          <p className='mt-3 lh-lg'>{client.message}</p>
        </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default Glidebook;