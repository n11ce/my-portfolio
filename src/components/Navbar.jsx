
export default function Navbar(){
    return(
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-black fixed-top">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <span class="text-primary">&lt;</span>HŞ<span class="text-primary">/&gt;</span>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item"><a class="nav-link" href="#anasayfa">Anasayfa</a></li>
                            <li class="nav-item"><a class="nav-link" href="#timeline">Zaman Çizelgesi</a></li>
                            <li class="nav-item"><a class="nav-link" href="#hakkimda">Hakkımda</a></li>
                            <li class="nav-item"><a class="nav-link" href="#yetenekler">Yetenekler</a></li>
                            <li class="nav-item"><a class="nav-link" href="#projeler">Projeler</a></li>
                            <li class="nav-item"><a class="nav-link" href="#iletisim">İletişim</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}