<script>
  import { mostrarl } from "../store/store.js";

  let btnLog = "Login";

  function mostrarLogin() {
    if ((btnLog == "Login")) {
      mostrarl.update(n => 1);
      btnLog = "Principal";
    } else {
      btnLog = "Login";
      mostrarl.update(n => 0);
    }
  }
</script>

<div class="container">
  <nav class="bg-dark navbar fixed-top navbar-expand-lg navbar-dark">
    <a class="navbar-brand" href="www.altchain.com">Altchain</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <a on:click={() => mostrarLogin()} class="nav-link" href="#">
            {btnLog}
          </a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="https://es.tradingview.com/chart/">
            TradingView
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://localbitcoins.com/">LocalBTC</a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="https://www.binance.com/es/trade/pro/BTC_USDT">
            Binance
          </a>
        </li>
      </ul>
    </div>
  </nav>
</div>
