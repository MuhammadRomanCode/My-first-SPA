import React from 'react'

function Footer(props) {
  return (
    <div>
      <div className={`container-fluid mt-5 bottom-0 border-top py-5 bg-${props.mode}`}>
        <footer className={`footer row bg-${props.mode}`}>
          <div className={`col-12 col-sm-6 col-lg-3 d-flex align-items-center flex-column mt-3 p-5 text-${(props.mode === "light"?"dark":"light")}`}>
            <h2>GlideBook</h2>
            <p className='text-primary'>A sleek Design</p>
          </div>
          <div className={`col-12 col-sm-6 col-lg-3 d-flex justify-content-center mt-3 p-3`}>
            <ul className='list-group'>
              <li className={`list-group-item bg-${props.mode} border-0`}><a href="/" className='text-decoration-none'>GlideBook</a></li>
              <li className={`list-group-item bg-${props.mode} border-0`}><a href="/" className='text-decoration-none'>Contacts</a></li>
              <li className={`list-group-item bg-${props.mode} border-0`}><a href="/" className='text-decoration-none'>Home</a></li>
              <li className={`list-group-item bg-${props.mode} border-0`}> <a href="/" className='text-decoration-none'>Pages</a></li>
              <li className={`list-group-item bg-${props.mode} border-0`}><a href="/" className='text-decoration-none'>Navigate to top</a></li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center mt-3 p-3">
            <ul className='list-group'>
              <li className={`list-group-item bg-${props.mode} border-0`}><a href="/" className='text-decoration-none'>Youtube</a></li>
              <li className={`list-group-item bg-${props.mode} border-0`}><a href="/" className='text-decoration-none'>Instagram</a></li>
              <li className={`list-group-item bg-${props.mode} border-0`}><a href="/" className='text-decoration-none'>Twitter</a></li>
              <li className={`list-group-item bg-${props.mode} border-0`}> <a href="/" className='text-decoration-none'>Facebook</a></li>
              <li className={`list-group-item bg-${props.mode} border-0`}><a href="/" className='text-decoration-none'>Tiktok</a></li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center mt-3 p-3">
            <ul className='list-group'>
              <li className={`list-group-item bg-${props.mode} border-0`}><a href="/" className='text-decoration-none'>GlideBook</a></li>
              <li className={`list-group-item bg-${props.mode} border-0`}><a href="/" className='text-decoration-none'>Contacts</a></li>
              <li className={`list-group-item bg-${props.mode} border-0`}><a href="/" className='text-decoration-none'>Home</a></li>
              <li className={`list-group-item bg-${props.mode} border-0`}> <a href="/" className='text-decoration-none'>Pages</a></li>
              <li className={`list-group-item bg-${props.mode} border-0`}><a href="/" className='text-decoration-none'>Navigate to top</a></li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer
