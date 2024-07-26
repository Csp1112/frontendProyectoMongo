import React from 'react'

const CompMenu = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button
                        aria-controls="navbarTogglerDemo01"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        className="navbar-toggler"
                        data-bs-target="#navbarTogglerDemo01"
                        data-bs-toggle="collapse"
                        type="button"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarTogglerDemo01"
                    >
                        <a
                            className="navbar-brand"
                            href="http://localhost:5173/"
                        >
                            Inicio
                        </a>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a
                                    aria-current="page"
                                    className="nav-link active"
                                    href="/clientes"
                                >
                                    Clientes
                                </a>
                            </li>
                            
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="/productos"
                                >
                                    Productos
                                </a>
                            </li>
                            
                        </ul>
                        <form
                            className="d-flex"
                            role="search"
                        >
                            <input
                                aria-label="Search"
                                className="form-control me-2"
                                placeholder="Buscar"
                                type="search"
                            />
                            <button
                                className="btn btn-outline-success"
                                type="submit"
                            >
                                Buscar
                            </button>
                        </form>
                    </div>
                </div>
            </nav>

        </div>

    )
}

export default CompMenu