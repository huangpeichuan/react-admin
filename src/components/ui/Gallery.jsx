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

const requireContext = require.context("./img",true, /^\.\/.*\.jpg$/);
const projectImgs = requireContext.keys().map(requireContext);


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
                'https://cdn.pixabay.com/photo/2019/06/22/20/55/godfather-4292451__340.jpg',
                'https://cdn.pixabay.com/photo/2019/09/04/09/48/mammal-4451152__340.jpg',
                'https://cdn.pixabay.com/photo/2015/11/22/19/04/crowd-1056764__340.jpg',
                'http://img4.imgtn.bdimg.com/it/u=3858594025,2237922397&fm=26&gp=0.jpg',
                'https://cdn.pixabay.com/photo/2019/09/04/20/34/plantation-4452538__340.jpg',
                projectImgs[9],
                projectImgs[10],
                projectImgs[7],
                projectImgs[8]
            ],
            [
                'https://cdn.pixabay.com/photo/2019/09/03/13/57/forest-4449492__340.jpg',
                'https://cdn.pixabay.com/photo/2019/08/25/05/54/tiger-4428788__340.jpg',
                'https://cdn.pixabay.com/photo/2019/08/23/16/00/landscape-4425964__340.jpg',
                'https://cdn.pixabay.com/photo/2019/09/04/13/06/sail-4451570__340.jpg',
                'https://cdn.pixabay.com/photo/2019/09/03/06/15/girl-4448689__340.jpg',
                projectImgs[0],
                projectImgs[5]
            ],
            [
                'http://img3.imgtn.bdimg.com/it/u=2701126568,1718215955&fm=26&gp=0.jpg',
                'http://img2.imgtn.bdimg.com/it/u=4167667062,4245270420&fm=26&gp=0.jpg',
                'https://img02.sogoucdn.com/app/a/100520021/1d5e0ba39c3e736ce5d3ecd820c1016a',
                'https://img02.sogoucdn.com/app/a/100520021/67c0e5cd1b790c809e27eab115d663e8',
                'https://img04.sogoucdn.com/app/a/100520021/54ffb9a89ca96058661cee8533df7751',
                projectImgs[1],
                projectImgs[6]
            ],
            [
                'https://img04.sogoucdn.com/app/a/100520021/d0ef1743ff0b155f823898aecd8977ef',
                'https://img03.sogoucdn.com/app/a/100520021/ac3b73a5945ac02d15aae8af17e6864f',
                'https://img03.sogoucdn.com/app/a/100520021/7097ef8fe82b39bfaf3dbb1cb828f5ed',
                'https://icweiliimg6.pstatp.com/weili/l/650863802271793159.webp',
                'https://icweiliimg9.pstatp.com/weili/l/579873928483569666.webp',
                projectImgs[2],
                projectImgs[7]
            ],
            [
                'https://icweiliimg6.pstatp.com/weili/l/579874100278198295.webp',
                'http://img.mp.itc.cn/q_70,c_zoom,w_640/upload/20170511/98e7b8ba53af4adb9805a933e847438b_th.jpg',
                'http://img0.imgtn.bdimg.com/it/u=3236612177,3789718421&fm=26&gp=0.jpg',
                'http://img5.imgtn.bdimg.com/it/u=307334627,3485973798&fm=26&gp=0.jpg',
                'http://b-ssl.duitang.com/uploads/item/201804/17/20180417223646_PYzWz.jpeg',
                projectImgs[3],
                projectImgs[8]
            ]
        ];
        const imgsTag = imgs.map(v1 => (
            v1.map(v2 => (
                <div className="gutter-box" key={v2}>
                    <Card bordered={false} bodyStyle={{ padding: 0 }}>
                        <div>
                            <img onClick={() => this.openGallery(v2)} alt="example" width="100%" src={v2} />
                        </div>
                        <div className="pa-m">
                            <h3>飞鱼的幻想之旅</h3>
                            <small><a href="https://blog.csdn.net/weixin_35654814/" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/weixin_35654814/</a></small>
                        </div>
                    </Card>
                </div>
            ))
        ));
        console.info(imgsTag);
        return (
            <div className="gutter-example button-demo">
                <BreadcrumbCustom first="UI" second="画廊(图片来自花瓣网，仅学习，若侵权请联系删除)" />
                {/* 固定五列布局 */ }
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
