
function Home(props) {
  return (
    <div>
      <div className="container-md mt-5 py-5  ">
        <div className="row">

          <div className="col-12 col-lg-6">
            <div className="img">
              <img src="/Assets/Laptop2.png" alt="Something went wrong" className='img-fluid position-relative d-none d-md-flex z-1 h-100' />
              <img src="/Assets/GlideBook Mobile.png" alt="Something went wrong" className='img-fluid d-flex d-md-none position-relative z-1 h-100' />
            </div>
          </div>
          <div className={`col-12 col-lg-6 mt-3 mb-3 p-3 text-${(props.mode === "light"?"dark":"light")}`}>
            <h1 className='heading m-3'>GlideBook</h1>
            <h4 className='m-3 mt-4 fw-light text-primary '>Designed to move. Built to perform.</h4>
            <p className='m-3 mt-4 lh-lg'>GlideBook respects the legacy of beautifully designed laptops like the MacBook, while pushing beyond them into a future powered by smarter software and flexible hardware.</p>
            <button className="btn btn-primary m-3 shadow p-2">Explore Glidebook</button>
          </div>
        </div>
      </div>
      <div className={`container-md text-${(props.mode === "light"?"dark":"light")}`}>
        <h2 className='text-center m-3'>Features in GlideBook</h2>
        <h4 className='text-center fw-light text-primary mt-3 '>Glidebooks Provide Really Good Features to Improve User Experience</h4>
        <div className="row justify-content-center gap-3 mt-5">

          <div className={`card border-0 bg-${props.mode} text-${(props.mode === "light"?"dark":"light")}`} style={{ width: "24rem" }}>
            <div className="card-body">
              <h5 className="card-title mb-4">True Detachable Architecture</h5>
              <p className='lh-lg mt-3'>GlideBook is not just a 2-in-1 — its screen is a fully independent computer.<br />Detach it and GlideOS instantly switches into tablet-first mode without losing any power or apps.</p>
            </div>
          </div>

          <div className={`card border-0 bg-${props.mode} text-${(props.mode === "light"?"dark":"light")}`} style={{ width: "24rem" }}>
            <div className="card-body">
              <h5 className="card-title mb-4">GlideOS Adaptive Intelligence</h5>
              <div className='lh-lg'>GlideOS learns how you work.<br />
                It automatically adjusts:<br />
                <ul>
                  <li>Performance</li>
                  <li>Battery Usage</li>
                  <li>App Layout</li>
                </ul>

                based on whether you are coding, designing, watching, or writing — without you touching any settings.<br />

                Your device adapts to you, not the other way around.</div>
            </div>
          </div>

          <div className={`card border-0 bg-${props.mode} text-${(props.mode === "light"?"dark":"light")}`} style={{ width: "24rem" }}>
            <div className="card-body">
              <h5 className="card-title mb-4">Seamless Multi-Mode Workspace</h5>
              <div className='lh-lg'>When you detach the screen, GlideBook creates two connected environments:<br />
                <ul>
                  <li>The keyboard becomes a control hub</li>
                  <li>The screen becomes a creative tablet</li>
                </ul>
                You can drag apps between them wirelessly, turning one device into two powerful workspaces.
                Something no traditional laptop can do.</div>
            </div>
          </div>


        </div>
      </div>
      <div className="container mt-5 py-5">
        <h2 className='text-center mb-3'>GlideBook</h2>
        <h4 className='text-primary fw-light text-center mb-5 '>Where performance meets freedom.</h4>
        <div className="container h-100">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item w-100" style={{ height: "600px" }} title='Trailer' src="https://www.youtube.com/embed/B_Ortm1pyik"></iframe>
          </div>
        </div>
      </div>

      <div className={`container my-5 text-${(props.mode === "light"?"dark":"light")}`}>
        <h2 className='text-center m-4'>Pricings for GlideBook</h2>
        <h4 className='text-center my-5 mt-3 text-primary'>We Provide Very resonable price for out customers</h4>
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-md-6 col-lg-4">
            <div className={`card p-3 mt-4  h-100 bg-${props.mode} text-${(props.mode === "light"?"dark":"light")}`}>
              <div className="card-img"><img src="/Assets/GlideBook.png" alt="GlideBook Img" className='img-fluid' /></div>
              <div className="card-body">
                <div className="card-title"><h4>GlideBook</h4></div>
                <div className="card-body lh-lg">Glidebook has some Unique features that not every Product gives to their Users!
                  <p className='text-primary'>Why Choose Us</p>
                  <p className='mt-2'>We Provide Premium products like apple, we Provide Features like samsung, we provide beauty like Huawei</p>
                  <p>Not Every Product gives you that Beast combination.</p>
                  <h6 className='text-primary'>$ 799.00</h6>
                </div>
              </div>
            </div>


          </div>
          <div className="col-12 col-md-6 col-lg-4 mt-2">
            <div className={`card p-3 mt-4  h-100 bg-${props.mode} text-${(props.mode === "light"?"dark":"light")}`}>
              <div className="card-img d-flex justify-content-center"><img src="/Assets/White Laptop.jpg" alt="GlideBook Img" className='img-fluid' /></div>
              <div className="card-body">
                <div className="card-title"><h4>GlideBook Pro</h4></div>
                <div className="card-body lh-lg">Glidebook has some Unique features that not every Product gives to their Users!
                  <p className='text-primary'>Why Choose Us</p>
                  <p className='mt-2'>We Provide Premium products like apple, we Provide Features like samsung, we provide beauty like Huawei</p>
                  <p>Not Every Product gives you that Beast combination.</p>
                  <h6 className='text-primary'>$ 899.00</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mt-2">
            <div className={`card p-3 mt-4  h-100 bg-${props.mode} text-${(props.mode === "light"?"dark":"light")}`}>
              <div className="card-img d-flex justify-content-center mb-4"><img src="/Assets/Laptop Black.avif" alt="GlideBook Img" className='img-fluid' /></div>
              <div className="card-body">
                <div className="card-title"><h4>GlideBook Grock</h4></div>
                <div className="card-body lh-lg">Glidebook has some Unique features that not every Product gives to their Users!
                  <p className='text-primary'>Why Choose Us</p>
                  <p className='mt-2'>We Provide Premium products like apple, we Provide Features like samsung, we provide beauty like Huawei</p>
                  <p>Not Every Product gives you that Beast combination.</p>
                  <h6 className='text-primary'>$ 899.00</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
