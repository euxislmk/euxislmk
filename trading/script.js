$(document).ready(function() {
    var container = $('#tradingviewtechnicalanalysis');

    // Create form, input field and button
    var exchanges = ['NASDAQ', 'TSX', 'NYSE'];
    var defaultExchange = localStorage.getItem('exchange') || 'NASDAQ';
    var defaultSymbol = 'MSFT';
    var htmlContent = `
        <form onsubmit="event.preventDefault(); tradingviewAnalysis($('#stockSymbol').val(), 'tradingview-widget');">
            <div class="input-group">
                <input type="text" id="stockSymbol" placeholder="Enter Stock Symbol" class="form-control" value="${defaultSymbol}">
                <div class="input-group-btn">
                    <button type="button" id="exchange" data-toggle="dropdown" class="btn btn-default dropdown-toggle">${defaultExchange} <span class="caret"></span></button>
                    <ul class="dropdown-menu dropdown-menu-right">
                        ${exchanges.map(exchange => `<li><a href="#" onclick="event.preventDefault();">${exchange}</a></li>`).join('')}
                    </ul>
                </div>
            </div>
        </form>
        <div class="tradingview-widget-container">
            <div id="tradingview-widget" class="tradingview-widget-container__widget"></div>
            <div class="tradingview-widget-copyright">
                <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
                    <span class="blue-text">Track all markets on TradingView</span>
                </a>
            </div>
        </div>
    `;

    container.html(htmlContent);

    $('.dropdown-menu a').click(function(event) {
        event.preventDefault();
        var selectedExchange = $(this).text();
        $('#exchange').html(selectedExchange + ' <span class="caret"></span>');
        localStorage.setItem('exchange', selectedExchange);
    });

    // Set focus on the input field
    $('#stockSymbol').focus();
});

function tradingviewAnalysis(symbol, divId) {
    if (symbol) {
        $('#' + divId).empty();
        var script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js';
        script.async = true;
        script.innerHTML = JSON.stringify({
            "interval": "1D",
            "width": "100%",
            "isTransparent": true,
            "height": "100%",
            "symbol": $('#exchange').text().trim() + ':' + symbol,
            "showIntervalTabs": true,
            "displayMode": "single",
            "locale": "en",
            "colorTheme": "light"
        });
        document.getElementById(divId).appendChild(script);
    }
}
