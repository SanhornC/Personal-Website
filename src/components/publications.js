import React from 'react';

export const Publications = () => {
  return (
    <div className="publications-page">
      <div className="publications-section">
        <div className="container">
          <div className="publications-container">
            <div className="publications-column">
              <h2>Publications</h2>
              <ul className="publications-list">
                <li>
                  <span className="publication-authors">Sanhorn Chen*, Baoyu Jing*, Lecheng Zheng, Boyu Liu, Zihao Li, Jiaru Zou, Tianxin Wei, Zhinning Liu, Zhichen Zeng, Ruizhong Qiu, Xiao Lin, Yuchen Yan, Qi Yu, Dongqi Fu, Jingchao Ni, Jingrui He, and Hanghang Tong.</span>
                  <span className="publication-title"> "TSAQA: Time Series Analysis Question and Answering Benchmark."</span>
                  <span className="publication-venue"> Submitted to the Annual Meeting of the Association for Computational Linguistics (ACL), 2026.</span>
                  <span className="publication-link"> <a href="https://openreview.net/forum?id=ULQt51DRug" target="_blank" rel="noopener noreferrer">[PDF]</a></span>
                </li>
                <li>
                  <span className="publication-authors">Sanhorn Chen, Baoyu Jing, Zeya Wang, Hanghang Tong.</span>
                  <span className="publication-title"> "A Survey on Time Series Question Answering."</span>
                  <span className="publication-venue"> To be submitted to International Joint Conference on Artificial Intelligence (IJCAI), 2026.</span>
                </li>
                <li>
                  <span className="publication-authors">Ziyang Lin, Zixuan Sun, Sanhorn Chen, Xiaoyang Chen, Roy Zhao.</span>
                  <span className="publication-title"> "Accelerating Multi-modal LLM Gaming Performance via Input Prediction and Mishit Correction."</span>
                  <span className="publication-venue"> arXiv preprint, 2025.</span>
                  <span className="publication-link"> <a href="https://arxiv.org/abs/2512.17250" target="_blank" rel="noopener noreferrer">[PDF]</a></span>
                </li>
              </ul>
            </div>

            <div className="publications-column">
              <h2>Patents</h2>
              <ul className="publications-list">
                <li>
                  <span className="publication-authors">Shen-Hsuan Liu, Chi-En Huang, Muhammad Saqlain Aslam, Yung-Hui Li, Sanhorn Chen.</span>
                  <span className="publication-title"> "Method and Apparatus Related to Data Generation Framework."</span>
                  <span className="publication-venue"> US Patent Application 19/069,248, 2025.</span>
                </li>
                <li>
                  <span className="publication-authors">Shen-Hsuan Liu, Chi-En Huang, Muhammad Saqlain Aslam, Yung-Hui Li, Sanhorn Chen.</span>
                  <span className="publication-title"> "Method and Apparatus Related to Data Generation Framework."</span>
                  <span className="publication-venue"> US Patent Application 19/069,242, 2025.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
