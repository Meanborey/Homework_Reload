import React from 'react'
<div className="card">
    <img src="..." className="card-img-top" alt="..." />

    <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
</div>
function Reload({ getData }) {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    {
                        getData.map(el => (
                            <div className='col-12 col-sm-6 col-md-4 col-xl-3'>
                                <div className="card">
                                    <img src={el.images} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{el.title}</h5>
                                        <p className="card-text fs-5">{el.description}.</p>
                                        <p className='card-text'>{el.updatedAt}</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </>
    )
}
function PlaceHolder() {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-sm-6 col-md-4 col-xl-3'>
                        <div className="card" aria-hidden="true">
                            <img src="https://via.placeholder.com/640x360" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title placeholder-glow">
                                    <span className="placeholder col-6"></span>
                                </h5>
                                <p className="card-text placeholder-glow">
                                    <span className="placeholder col-7"></span>
                                    <span className="placeholder col-4"></span>
                                    <span className="placeholder col-4"></span>
                                    <span className="placeholder col-6"></span>
                                    <span className="placeholder col-8"></span>
                                </p>
                                <a class="btn btn-primary disabled placeholder col-6"></a>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-sm-6 col-md-4 col-xl-3'>
                        <div className="card" aria-hidden="true">
                            <img src="https://via.placeholder.com/640x360" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title placeholder-glow">
                                    <span className="placeholder col-6"></span>
                                </h5>
                                <p className="card-text placeholder-glow">
                                    <span className="placeholder col-7"></span>
                                    <span className="placeholder col-4"></span>
                                    <span className="placeholder col-4"></span>
                                    <span className="placeholder col-6"></span>
                                    <span className="placeholder col-8"></span>
                                </p>
                                <a class="btn btn-primary disabled placeholder col-6"></a>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-sm-6 col-md-4 col-xl-3'>
                        <div className="card" aria-hidden="true">
                            <img src="https://via.placeholder.com/640x360" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title placeholder-glow">
                                    <span className="placeholder col-6"></span>
                                </h5>
                                <p className="card-text placeholder-glow">
                                    <span className="placeholder col-7"></span>
                                    <span className="placeholder col-4"></span>
                                    <span className="placeholder col-4"></span>
                                    <span className="placeholder col-6"></span>
                                    <span className="placeholder col-8"></span>
                                </p>
                                <a class="btn btn-primary disabled placeholder col-6"></a>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-sm-6 col-md-4 col-xl-3'>
                        <div className="card" aria-hidden="true">
                            <img src="https://via.placeholder.com/640x360" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title placeholder-glow">
                                    <span className="placeholder col-6"></span>
                                </h5>
                                <p className="card-text placeholder-glow">
                                    <span className="placeholder col-7"></span>
                                    <span className="placeholder col-4"></span>
                                    <span className="placeholder col-4"></span>
                                    <span className="placeholder col-6"></span>
                                    <span className="placeholder col-8"></span>
                                </p>
                                <a class="btn btn-primary disabled placeholder col-6"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
function Reloads({ loadingdata, getapi }) {
    return loadingdata ? <PlaceHolder /> : <Reload getData={getapi} />
}
export default Reloads