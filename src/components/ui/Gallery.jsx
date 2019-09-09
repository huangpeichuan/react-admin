/**
 * Created by hao.cheng on 2017/5/6.
 */
import React from 'react';
import { Row, Col, Card } from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';
import PhotoSwipe from 'photoswipe';
import PhotoswipeUIDefault from 'photoswipe/dist/photoswipe-ui-default';
import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';

class Gallery extends React.Component {
    state = {
        gallery: null
    };
    componentDidMount() {
    }
    componentWillUnmount = () => {
        this.closeGallery();
    };
    openGallery = (item) => {
        const items = [
            {
                src: item,
                w: 0,
                h: 0,
            }
        ];
        const pswpElement = this.pswpElement;
        const options = {index: 0};
        this.gallery = new PhotoSwipe( pswpElement, PhotoswipeUIDefault, items, options);
        this.gallery.listen('gettingData', (index, item) => {
            const _this = this;
            if (item.w < 1 || item.h < 1) { // unknown size
                var img = new Image();
                img.onload = function() { // will get size after load
                    item.w = this.width; // set image width
                    item.h = this.height; // set image height
                    _this.gallery.invalidateCurrItems(); // reinit Items
                    _this.gallery.updateSize(true); // reinit Items
                };
                img.src = item.src; // let's download image
            }
        });
        this.gallery.init();
    };
    closeGallery = () => {
        if (!this.gallery) return;
        this.gallery.close();
    };
    render() {
        const imgs = [
            [
                'https://hbimg.huabanimg.com/f45f5e08a04c5edea85ef33c1c074e8c83e1688960bb5-3qfDoe_fw658',
                'https://hbimg.huabanimg.com/f8a65dbd86a674515181caef81b086e2b3bc3ea8b97ae-hlTD9q_fw658',
                'https://hbimg.huabanimg.com/453d60ec46b83b3edd7a7ebd4c189724bad17f87330db-bHDlHh_fw658',
                'https://hbimg.huabanimg.com/17b2256ad0ba5df25dedccd13c802ca2e63e146ddba3d-0jhiGd_fw658',
                'https://hbimg.huabanimg.com/360fc27b7db8a262f01d1c678212a03ebd8ef5199ccf5-WEPdsV_fw658',

            ],
            [
                'https://hbimg.huabanimg.com/e46f98e85874e5f00041314dff487bb0429fe3797b5220-37K4Ly_fw658',
                'https://hbimg.huabanimg.com/e05d6ad49c4d3d78d8a01e803a02520d3b2d48011b52a-CppkOF_fw658',
                'https://hbimg.huabanimg.com/7f1ef783024867c75fd1520a34995ae3add3c7dfe8bb2-xz5tnE_fw658',
                'https://hbimg.huabanimg.com/7740cc4a2466f50b16e65f767c9092cf567c9cb7304af-IzSw3X_fw658',
                'https://hbimg.huabanimg.com/d6feeff527e0946d1a9af636061fd80efdf06fee65ac3-EatZqo_fw658'
            ],
            [
                'https://hbimg.huabanimg.com/f45f5e08a04c5edea85ef33c1c074e8c83e1688960bb5-3qfDoe_fw658',
                'https://hbimg.huabanimg.com/f8a65dbd86a674515181caef81b086e2b3bc3ea8b97ae-hlTD9q_fw658',
                'https://hbimg.huabanimg.com/453d60ec46b83b3edd7a7ebd4c189724bad17f87330db-bHDlHh_fw658',
                'https://hbimg.huabanimg.com/17b2256ad0ba5df25dedccd13c802ca2e63e146ddba3d-0jhiGd_fw658',
                'https://hbimg.huabanimg.com/360fc27b7db8a262f01d1c678212a03ebd8ef5199ccf5-WEPdsV_fw658',
            ],
            [
                'https://hbimg.huabanimg.com/e46f98e85874e5f00041314dff487bb0429fe3797b5220-37K4Ly_fw658',
                'https://hbimg.huabanimg.com/e05d6ad49c4d3d78d8a01e803a02520d3b2d48011b52a-CppkOF_fw658',
                'https://hbimg.huabanimg.com/7f1ef783024867c75fd1520a34995ae3add3c7dfe8bb2-xz5tnE_fw658',
                'https://hbimg.huabanimg.com/7740cc4a2466f50b16e65f767c9092cf567c9cb7304af-IzSw3X_fw658',
                'https://hbimg.huabanimg.com/d6feeff527e0946d1a9af636061fd80efdf06fee65ac3-EatZqo_fw658'
            ],
            [
                'https://hbimg.huabanimg.com/f45f5e08a04c5edea85ef33c1c074e8c83e1688960bb5-3qfDoe_fw658',
                'https://hbimg.huabanimg.com/f8a65dbd86a674515181caef81b086e2b3bc3ea8b97ae-hlTD9q_fw658',
                'https://hbimg.huabanimg.com/453d60ec46b83b3edd7a7ebd4c189724bad17f87330db-bHDlHh_fw658',
                'https://hbimg.huabanimg.com/17b2256ad0ba5df25dedccd13c802ca2e63e146ddba3d-0jhiGd_fw658',
                'https://hbimg.huabanimg.com/360fc27b7db8a262f01d1c678212a03ebd8ef5199ccf5-WEPdsV_fw658',
            ]
        ];e
        const imgsTag = imgs.map(v1 => (
            v1.map(v2 => (
                <div className="gutter-box" key={v2}>
                    <Card bordered={false} bodyStyle={{ padding: 0 }}>
                        <div>
                            <img onClick={() => this.openGallery(v2)} alt="example" width="100%" src={v2} />
                        </div>
                        <div className="pa-m">
                            <h3>React Admin</h3>
                            <small><a href="https://yezihaohao.github.io/" target="_blank" rel="noopener noreferrer">https://yezihaohao.github.io/</a></small>
                        </div>
                    </Card>
                </div>
            ))
        ));
        return (
            <div className="gutter-example button-demo">
                <BreadcrumbCustom first="UI" second="画廊(图片来自花瓣网，仅学习，若侵权请联系删除)" />
                <Row gutter={10}>
                    <Col className="gutter-row" md={5}>
                        {imgsTag[0]}
                    </Col>
                    <Col className="gutter-row" md={5}>
                        {imgsTag[1]}
                    </Col>
                    <Col className="gutter-row" md={5}>
                        {imgsTag[2]}
                    </Col>
                    <Col className="gutter-row" md={5}>
                        {imgsTag[3]}
                    </Col>
                    <Col className="gutter-row" md={4}>
                        {imgsTag[4]}
                    </Col>
                </Row>
                <div className="pswp" tabIndex="-1" role="dialog" aria-hidden="true" ref={(div) => {this.pswpElement = div;} }>

                    <div className="pswp__bg" />

                    <div className="pswp__scroll-wrap">

                        <div className="pswp__container">
                            <div className="pswp__item" />
                            <div className="pswp__item" />
                            <div className="pswp__item" />
                        </div>

                        <div className="pswp__ui pswp__ui--hidden">

                            <div className="pswp__top-bar">

                                <div className="pswp__counter" />

                                <button className="pswp__button pswp__button--close" title="Close (Esc)" />

                                <button className="pswp__button pswp__button--share" title="Share" />

                                <button className="pswp__button pswp__button--fs" title="Toggle fullscreen" />

                                <button className="pswp__button pswp__button--zoom" title="Zoom in/out" />

                                <div className="pswp__preloader">
                                    <div className="pswp__preloader__icn">
                                        <div className="pswp__preloader__cut">
                                            <div className="pswp__preloader__donut" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                                <div className="pswp__share-tooltip" />
                            </div>

                            <button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)" />

                            <button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)" />

                            <div className="pswp__caption">
                                <div className="pswp__caption__center" />
                            </div>

                        </div>

                    </div>

                </div>
                <style>{`
                    .ant-card-body img {
                        cursor: pointer;
                    }
                `}</style>
            </div>
        )
    }
}

export default Gallery;