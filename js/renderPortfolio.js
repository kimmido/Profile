renderPortfolio()
async function renderPortfolio() {
    const data = await getData("portfolio");
    const portfolioList = document.querySelector('ul.portfolio-list');
    console.log(data)

    if (data) {
        let portfolioItem = '';

        data.forEach(item => {
            portfolioItem = `
                <div class="item-inner">
                    <div class="item-area">
                        <div class="item-img">
                            <img src="https://kimmido.github.io/Profile/images/projects/portfolio_${item.img-name}.png" alt="포트폴리오${item.idx}">
                        </div>
                        <div class="item-con">
                            <div class="index-wrap">
                                <h3>Portfolio</h3>
                                <div class="index">
                                    ${data.map(idx => (
                                        idx.idx == item.idx?
                                        '<span class="click on"></span>'
                                        : '<span class="click"></span>'
                                    ))}
                                </div>
                            </div>
                            <div class="title-text-link">
                                <div class="title-box">
                                    <strong>${item.title}</strong>
                                </div>
                                <div class="text-box">
                                    <p class="introduce">${item.introduce}</p>
                                    <table>
                                        ${item.contents.map(content => `
                                            <tr>
                                                <th>${content.th}</th>
                                                <td>${content.td}</td>
                                            </tr>
                                        `).join('')}
                                    </table>
                                </div>
                                <ul class="link-box">
                                    ${item.link.map(link => `
                                        <li>
                                            <a class="click" target="_blank" href="${link.href}">${link.text}</a>
                                        </li>
                                    `).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });

        portfolioList.innerHTML = portfolioItem;
        
    } else {
        console.log("데이터를 가져오는 데 실패했습니다.");
    }
}
