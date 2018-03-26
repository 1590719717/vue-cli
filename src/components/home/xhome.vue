<template>
	<div class="home-container">
		<div style="border: 1px solid #eee; border-radius: 8px; height: 384px; background: #fff; ">
			<div class="header-nav">
				<div class="all-left">
					<p class="headerNav">
						<span class="headfirst">实时概况</span>
					</p>
					<p class="headerNav">
						<span>更新时间:</span>
						<span>{{today}}</span>
						<!--<span></span>-->
					</p>
				</div>
			</div>
			<div class="showChart">
				<div class="leftchart" style="">
					<div class="payShow payfirst">
						<p>支付金额 <span>(元)</span></p>
						<p><i class="iconfont icon-fl-renminbi"></i>{{countNum}}
							<span>昨天全天: </span><em> {{countNum}}</em>
						</p>

					</div>
					<div id="myEchart" style="">
						<!--<div id="chart" style="width: 100%; height: 100%; "></div>-->
						<Chart heiht='100%' width='100%'></Chart>
					</div>
				</div>
				<div class="showData">
					<div>
						<div class="payShow payData">
							<p><i class=""></i>成交金额</p>
							<p>{{countNum}}</p>
							<p>昨天全天: <span> {{countNum}}</span></p>
						</div>
						<div class="payShow " style="margin-top: 50px;">
							<p><i class=""></i>浏览量</p>
							<p>{{countNum}}</p>
							<p>昨天全天: <span> {{countNum}}</span></p>
						</div>
					</div>

					<div>
						<div class="payShow payData">
							<p><i class=""></i>访客数</p>
							<p>{{countNum}}</p>
							<p>昨天全天: <span> {{countNum}}</span></p>
						</div>
						<div class="payShow " style="margin-top: 50px;">
							<p><i class=""></i>支付转化率</p>
							<p>{{countNum}}</p>
							<p>昨天全天: <span> {{countNum}}</span></p>
						</div>
					</div>
				</div>

			</div>
		</div>
		<div style="clear: both; height: 74px; box-sizing: border-box;">
			<div class="select-pickday">
				<div class="line left-line"></div>
				<ul>
					<li class="to-day left-day" @click="subDay"><i class="el-icon-arrow-left"></i> 前一天 </li>
					<li class="now-day">
						<el-date-picker class="dateinput" style="width: 130px; height: 30px;" v-model="value8" size="small" align="center" type="date" :default-value="this.nowDay">
						</el-date-picker>
					</li>
					<li class="to-day right-day" @click="addDay">后一天 <i class="el-icon-arrow-right"></i></li>
				</ul>
				<div class="line right-line"></div>
			</div>

		</div>
		<!--核心指标-->
		<div class="core">
			<div class="header-nav">
				<div class="all-left">
					<p class="headerNav">
						<span class="headfirst">核心指标</span>
					</p>
				</div>
			</div>
			<div class="core-main">
				<div class="core-main-top">
					<slide-swiper></slide-swiper>
					<!--<div class="preleft jiantou">
						<i class="el-icon-arrow-left"></i>
					</div>-->
					<!--<div class="content-ul swiper-container">
						<ul class="swiper-wrapper">
							<li class="corelist swiper-slide">
								<p>成交金额<span>(元)</span></p>
								<p>2.70<span>万</span></p>
								<p>较前一天：<span>20%</span><i class="iconfont icon-shuzhishangsheng"></i></p>
								<p>较上周同期：<span>20%</span><i class="iconfont icon-shuzhixiajiang"></i></p>
							</li>
							<li class="corelist swiper-slide">
								<p>支付金额<span>(元)</span></p>
								<p>2.70<span>万</span></p>
								<p>较前一天：<span>20%</span><i class="iconfont icon-shuzhishangsheng"></i></p>
								<p>较上周同期：<span>20%</span><i class="iconfont icon-shuzhixiajiang"></i></p>
							</li>
							<li class="corelist swiper-slide">
								<p>下单金额<span>(元)</span></p>
								<p>2.70<span>万</span></p>
								<p>较前一天：<span>20%</span><i class="iconfont icon-shuzhishangsheng"></i></p>
								<p>较上周同期：<span>20%</span><i class="iconfont icon-shuzhixiajiang"></i></p>
							</li>
							<li class="corelist swiper-slide">
								<p>访客数<span>(元)</span></p>
								<p>2.70<span>万</span></p>
								<p>较前一天：<span>20%</span><i class="iconfont icon-shuzhishangsheng"></i></p>
								<p>较上周同期：<span>20%</span><i class="iconfont icon-shuzhixiajiang"></i></p>
							</li>
							<li class="corelist swiper-slide">
								<p>客单价<span>(元)</span></p>
								<p>2.70<span>万</span></p>
								<p>较前一天：<span>20%</span><i class="iconfont icon-shuzhishangsheng"></i></p>
								<p>较上周同期：<span>20%</span><i class="iconfont icon-shuzhixiajiang"></i></p>
							</li>
							<li class="corelist swiper-slide">
								<p>支付转化率<span>(元)</span></p>
								<p>2.70<span>万</span></p>
								<p>较前一天：<span>20%</span><i class="iconfont icon-shuzhishangsheng"></i></p>
								<p>较上周同期：<span>20%</span><i class="iconfont icon-shuzhixiajiang"></i></p>
							</li>
						</ul>
						<div class="swiper-button-next"></div>
    					<div class="swiper-button-prev"></div>
					</div>-->
					<!--<div class="nextright jiantou">
						<i class="el-icon-arrow-right"></i>
					</div>-->
				</div>
				<div class="core-main-bottom">
					<div class="core-main-bottom1">

						<div class="check-on">
							<p>已选：</p>
							<p><span></span>成交金额</p>
							<p><span></span>支付金额</p>
							<p><span></span>下单金额</p>
						</div>
					</div>
					<div class="coreechart">
						<!--<div id="coreEchart" style="width: 100%; height: 100%;"></div>-->
						<core-chart height='100%' width='100%'></core-chart>
					</div>
				</div>
			</div>
		</div>
		<!--流量分析-->
		<div class="flux">
			<div class="header-nav">
				<div class="all-left">
					<p class="headerNav">
						<span class="headfirst">流量分析</span>
					</p>
				</div>
				<div class="all-right">
					<p>
						<a href="#/xflux/xgeneral">流量分析 ></a>
					</p>
				</div>
			</div>
			<div class="flux-main">
				<div class="flux-main-left flux-main-content">
					<ul>
						<li class="flux-list">
							<div class="flux-list-div">
								<p>访客数</p>
								<p>{{countNum}}</p>
								<p>较前一天<span>6.14%</span><i class="iconfont icon-shuzhishangsheng"></i></p>
								<div class="visitchart">
									<div class="visitchart1">
										<visit-chart height='100%' width='100%'></visit-chart>
									</div>
								</div>
							</div>
						</li>
						<li class="flux-list">
							<div class="flux-list-div">
								<p>浏览量</p>
								<p>{{countNum}}</p>
								<p>较前一天<span>6.14%</span><i class="iconfont icon-shuzhishangsheng"></i></p>
								<div class="visitchart">
									<div class="visitchart1">
										<browse-chart height='100%' width='100%'></browse-chart>
									</div>
								</div>
							</div>
						</li>
						<li class="flux-list">
							<div class="flux-list-div">
								<p>跳失率</p>
								<p>{{countNum}}</p>
								<p>较前一天<span>6.14%</span><i class="iconfont icon-shuzhishangsheng"></i></p>
								<div class="visitchart">
									<div class="visitchart1">
										<bounce-chart height='100%' width='100%'></bounce-chart>
									</div>
								</div>
							</div>
						</li>
						<li class="flux-list">
							<div class="flux-list-div">
								<p>人均浏览量</p>
								<p>{{countNum}}</p>
								<p>较前一天<span>6.14%</span><i class="iconfont icon-shuzhishangsheng"></i></p>
								<div class="visitchart">
									<div class="visitchart1">
										<average-chart height='100%' width='100%'></average-chart>
									</div>
								</div>
							</div>
						</li>
						<li class="flux-list">
							<div class="flux-list-div">
								<p>平均停留时长</p>
								<p>{{countNum}}</p>
								<p>较前一天<span>6.14%</span><i class="iconfont icon-shuzhishangsheng"></i></p>
								<div class="visitchart">
									<div class="visitchart1">
										<avertime-chart height='100%' width='100%'></avertime-chart>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
				<div class="flux-main-mid flux-main-content">
					<div class="flux-mid-head">
						<div class="flux-mid-text">
							流量来源 <span>TOP5</span>
						</div>
						<div class="flux-mid-select">
							<el-select v-model="value" placeholder="请选择" size="mini">
								<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</div>
					</div>
					<div class="flux-mid-main">
						<div class="flux-main-top">
							<span>来源类型</span>
							<span>访客数</span>
							<span>支付转化率</span>
						</div>
						<div class="flux-main-list">
							<ul>
								<li class="flux-li">
									<div class="list-item">
										<p class="p1 floatleft">直接流量</p>
										<div class="progress-div floatleft">
											<span>1111</span>
											<div class="progress" style="width: 60px;">
												<el-progress :percentage="8" :show-text="false"></el-progress>
											</div>
											
										</div>
										<p class="p2 floatleft">8.88%</p>
									</div>
								</li>
								<li class="flux-li">
									<div class="list-item">
										<p class="p1 floatleft">自然搜索-百度</p>
										<div class="progress-div floatleft">
											<span>1111</span>
											<div class="progress" style="width: 60px;">
												<el-progress :percentage="8" :show-text="false"></el-progress>
											</div>
											
										</div>
										<p class="p2 floatleft">8.88%</p>
									</div>
								</li>
								<li class="flux-li">
									<div class="list-item">
										<p class="p1 floatleft">自然搜索-谷歌</p>
										<div class="progress-div floatleft">
											<span>1111</span>
											<div class="progress" style="width: 60px;">
												<el-progress :percentage="8" :show-text="false"></el-progress>
											</div>
											
										</div>
										<p class="p2 floatleft">8.88%</p>
									</div>
								</li>
								<li class="flux-li">
									<div class="list-item">
										<p class="p1 floatleft">自然搜索-搜狗</p>
										<div class="progress-div floatleft">
											<span>1111</span>
											<div class="progress" style="width: 60px;">
												<el-progress :percentage="8" :show-text="false"></el-progress>
											</div>
											
										</div>
										<p class="p2 floatleft">8.88%</p>
									</div>
								</li>
								<li class="flux-li">
									<div class="list-item">
										<p class="p1 floatleft">自然搜索-360</p>
										<div class="progress-div floatleft">
											<span>1111</span>
											<div class="progress" style="width: 60px;">
												<el-progress :percentage="8" :show-text="false"></el-progress>
											</div>
											
										</div>
										<p class="p2 floatleft">8.88%</p>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div class="flux-mid-foot">
						<p><span></span>我的店铺</p>
					</div>
				</div>
				<div class="flux-main-right flux-main-content">
					<div class="flux-right-head">
						<p>
							流量构成
						</p>
					</div>
					<div class="flux-right-main">
						<div class="make-chart">
							<make-chart height="100%" width="100%"></make-chart>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--交易分析-->
		<div class="trade">
			<div class="header-nav">
				<div class="all-left">
					<p class="headerNav">
						<span class="headfirst">交易分析</span>
					</p>
				</div>
				<div class="all-right">
					<p>
						<a href="#/xtrade/xtradegeneral">交易分析 ></a>
					</p>
				</div>
			</div>
			<div class="flux-main">
				<div class="flux-main-left flux-main-content">
					<ul>
						<li class="flux-list">
							<div class="flux-list-div">
								<p>成交金额<span>(元)</span></p>
								<p><i class="iconfont icon-fl-renminbi"></i>{{countNum}}</p>
								<p>较前一天<span>6.14%</span><i class="iconfont icon-shuzhishangsheng"></i></p>
								<div class="visitchart">
									<div class="visitchart1">
										<cheng-chart height='100%' width='100%'></cheng-chart>
									</div>
								</div>
							</div>
						</li>
						<li class="flux-list">
							<div class="flux-list-div">
								<p>支付金额<span>(元)</span></p>
								<p><i class="iconfont icon-fl-renminbi"></i>{{countNum}}</p>
								<p>较前一天<span>6.14%</span><i class="iconfont icon-shuzhishangsheng"></i></p>
								<div class="visitchart">
									<div class="visitchart1">
										<pay-chart height='100%' width='100%'></pay-chart>
									</div>
								</div>
							</div>
						</li>
						<li class="flux-list">
							<div class="flux-list-div">
								<p>下单金额<span>(元)</span></p>
								<p><i class="iconfont icon-fl-renminbi"></i>{{countNum}}</p>
								<p>较前一天<span>6.14%</span><i class="iconfont icon-shuzhishangsheng"></i></p>
								<div class="visitchart">
									<div class="visitchart1">
										<order-chart height='100%' width='100%'></order-chart>
									</div>
								</div>
							</div>
						</li>
						<li class="flux-list">
							<div class="flux-list-div">
								<p>客单价</p>
								<p>{{countNum}}</p>
								<p>较前一天<span>6.14%</span><i class="iconfont icon-shuzhishangsheng"></i></p>
								<div class="visitchart">
									<div class="visitchart1">
										<price-chart height='100%' width='100%'></price-chart>
									</div>
								</div>
							</div>
						</li>
						<li class="flux-list">
							<div class="flux-list-div">
								<p>支付转化率</p>
								<p>{{countNum}}</p>
								<p>较前一天<span>6.14%</span><i class="iconfont icon-shuzhishangsheng"></i></p>
								<div class="visitchart">
									<div class="visitchart1">
										<payge-chart height='100%' width='100%'></payge-chart>
									</div>
								</div>
							</div>
						</li>
						<li class="flux-list">
							<div class="flux-list-div">
								<p>下单转化率</p>
								<p>{{countNum}}</p>
								<p>较前一天<span>6.14%</span><i class="iconfont icon-shuzhishangsheng"></i></p>
								<div class="visitchart">
									<div class="visitchart1">
										<orderge-chart height='100%' width='100%'></orderge-chart>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
				<div class="flux-main-mid flux-main-content">
					<div class="flux-mid-head">
						<div class="flux-mid-text">
							类目交易贡献 <span>TOP3</span>
						</div>
						
					</div>
					<div class="flux-mid-main">
						<div class="flux-main-top">
							<span>类目</span>
							<span>支付金额</span>
							<span>支付金额占比</span>
						</div>
						<div class="flux-main-list">
							<ul>
								<li class="flux-li jiaoyi-li">
									<div class="list-item">
										<p class="p1 floatleft">直接流量</p>
										<div class="progress-div floatleft">
											<span>1111</span>
											<div class="progress" style="width: 60px;">
												<el-progress :percentage="8" :show-text="false"></el-progress>
											</div>
											
										</div>
										<p class="p2 floatleft">8.88%</p>
									</div>
								</li>
								<li class="flux-li jiaoyi-li">
									<div class="list-item">
										<p class="p1 floatleft">自然搜索-百度</p>
										<div class="progress-div floatleft">
											<span>1111</span>
											<div class="progress" style="width: 60px;">
												<el-progress :percentage="8" :show-text="false"></el-progress>
											</div>
											
										</div>
										<p class="p2 floatleft">8.88%</p>
									</div>
								</li>
								<li class="flux-li jiaoyi-li">
									<div class="list-item">
										<p class="p1 floatleft">自然搜索-谷歌</p>
										<div class="progress-div floatleft">
											<span>1111</span>
											<div class="progress" style="width: 60px;">
												<el-progress :percentage="8" :show-text="false"></el-progress>
											</div>
											
										</div>
										<p class="p2 floatleft">8.88%</p>
									</div>
								</li>
								
							</ul>
						</div>
					</div>
					<div class="flux-mid-foot">
						<p><span></span>我的店铺</p>
					</div>
					<div class="user-order">
						<p>用户交易特征</p>
					</div>
					<div class="user-chart">
						<user-chart height='100%' width='100%'></user-chart>
					</div>
				</div>
				<div class="flux-main-right flux-main-content">
					<div class="flux-right-head">
						<p>
							销售构成
						</p>
					</div>
					<div class="flux-right-main">
						<div class="make-chart">
							<sell-chart height="100%" width="100%"></sell-chart>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<!--商品分析-->
		<div class="goods">
			<div class="header-nav">
				<div class="all-left">
					<p class="headerNav">
						<span class="headfirst">商品分析</span>
					</p>
				</div>
				<div class="all-right">
					<p>
						<a href="#/xgoods/xgoodsgeneral">商品分析 ></a>
					</p>
				</div>
			</div>
			<div class="flux-main">
				<div class="flux-main-left flux-main-content">
					<ul>
						<li class="flux-list">
							<div class="flux-list-div">
								<p>商品访客数</p>
								<p>{{countNum}}</p>
								<p>较前一天<span>6.14%</span><i class="iconfont icon-shuzhishangsheng"></i></p>
								<div class="visitchart">
									<div class="visitchart1">
										<goodsv-chart height='100%' width='100%'></goodsv-chart>
									</div>
								</div>
							</div>
						</li>
						<li class="flux-list">
							<div class="flux-list-div">
								<p>加购商品数</p>
								<p>{{countNum}}</p>
								<p>较前一天<span>6.14%</span><i class="iconfont icon-shuzhishangsheng"></i></p>
								<div class="visitchart">
									<div class="visitchart1">
										<goodsa-chart height='100%' width='100%'></goodsa-chart>
									</div>
								</div>
							</div>
						</li>
						<li class="flux-list">
							<div class="flux-list-div">
								<p>加购客户数</p>
								<p>{{countNum}}</p>
								<p>较前一天<span>6.14%</span><i class="iconfont icon-shuzhishangsheng"></i></p>
								<div class="visitchart">
									<div class="visitchart1">
										<goodsper-chart height='100%' width='100%'></goodsper-chart>
									</div>
								</div>
							</div>
						</li>
						<li class="flux-list">
							<div class="flux-list-div">
								<p>商品动销率</p>
								<p>{{countNum}}</p>
								<p>较前一天<span>6.14%</span><i class="iconfont icon-shuzhishangsheng"></i></p>
								<div class="visitchart">
									<div class="visitchart1">
										<goodspin-chart height='100%' width='100%'></goodspin-chart>
									</div>
								</div>
							</div>
						</li>
						<li class="flux-list">
							<div class="flux-list-div">
								<p>支付商品件数</p>
								<p>{{countNum}}</p>
								<p>较前一天<span>6.14%</span><i class="iconfont icon-shuzhishangsheng"></i></p>
								<div class="visitchart">
									<div class="visitchart1">
										<goodsp-chart height='100%' width='100%'></goodsp-chart>
									</div>
								</div>
							</div>
						</li>
						<li class="flux-list">
							<div class="flux-list-div">
								<p>支付转化率</p>
								<p>{{countNum}}</p>
								<p>较前一天<span>6.14%</span><i class="iconfont icon-shuzhishangsheng"></i></p>
								<div class="visitchart">
									<div class="visitchart1">
										<goodsc-chart height='100%' width='100%'></goodsc-chart>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
				<div class="flux-main-mid flux-main-content">
					<div class="flux-mid-head">
						<div class="flux-mid-text">
							商品销售 <span>TOP5</span>
						</div>
						
					</div>
					<div class="flux-mid-main">
						<div class="flux-main-top goods-top">
							<span>商品信息</span>
							<span>销售件数</span>
						</div>
						<div class="goods-list">
							<ul>
								<li>
									<div class="goods-name">
										<div class="goods-img">
											<img  />
										</div>
										<div class="goods-info">
											<p>啦啦啦啦</p>
										</div>
									</div>
									<div class="goods-num">
										<p>125</p>
									</div>
								</li>
								<li>
									<div class="goods-name">
										<div class="goods-img">
											<img  />
										</div>
										<div class="goods-info">
											<p>啦啦啦啦</p>
										</div>
									</div>
									<div class="goods-num">
										<p>125</p>
									</div>
								</li>
								<li>
									<div class="goods-name">
										<div class="goods-img">
											<img  />
										</div>
										<div class="goods-info">
											<p>啦啦啦啦</p>
										</div>
									</div>
									<div class="goods-num">
										<p>125</p>
									</div>
								</li>
								<li>
									<div class="goods-name">
										<div class="goods-img">
											<img  />
										</div>
										<div class="goods-info">
											<p>啦啦啦啦</p>
										</div>
									</div>
									<div class="goods-num">
										<p>125</p>
									</div>
								</li>
								<li>
									<div class="goods-name">
										<div class="goods-img">
											<img  />
										</div>
										<div class="goods-info">
											<p>啦啦啦啦</p>
										</div>
									</div>
									<div class="goods-num">
										<p>125</p>
									</div>
								</li>
							</ul>
						</div>
					</div>
					
				</div>
				<div class="flux-main-mid flux-main-content">
					<div class="flux-mid-head">
						<div class="flux-mid-text">
							商品访问 <span>TOP5</span>
						</div>
						
					</div>
					<div class="flux-mid-main">
						<div class="flux-main-top goods-top">
							<span>商品信息</span>
							<span>访客数</span>
						</div>
						<div class="goods-list">
							<ul>
								<li>
									<div class="goods-name">
										<div class="goods-img">
											<img  />
										</div>
										<div class="goods-info">
											<p>啦啦啦啦</p>
										</div>
									</div>
									<div class="goods-num">
										<p>125</p>
									</div>
								</li>
								<li>
									<div class="goods-name">
										<div class="goods-img">
											<img  />
										</div>
										<div class="goods-info">
											<p>啦啦啦啦</p>
										</div>
									</div>
									<div class="goods-num">
										<p>125</p>
									</div>
								</li>
								<li>
									<div class="goods-name">
										<div class="goods-img">
											<img  />
										</div>
										<div class="goods-info">
											<p>啦啦啦啦</p>
										</div>
									</div>
									<div class="goods-num">
										<p>125</p>
									</div>
								</li>
								<li>
									<div class="goods-name">
										<div class="goods-img">
											<img  />
										</div>
										<div class="goods-info">
											<p>啦啦啦啦</p>
										</div>
									</div>
									<div class="goods-num">
										<p>125</p>
									</div>
								</li>
								<li>
									<div class="goods-name">
										<div class="goods-img">
											<img  />
										</div>
										<div class="goods-info">
											<p>啦啦啦啦</p>
										</div>
									</div>
									<div class="goods-num">
										<p>125</p>
									</div>
								</li>
							</ul>
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import echarts from "echarts"
//	import {swiper, swiperSlide} from 'vue-awesome-swiper'
//	import '../../assets/plugin/swiper.min.js'
	import slideSwiper from '../slide/slide'
	
	import { toThousands } from '@/assets/plugin/tothousands'
	import Chart from '../echarts/flux/actual'
	import visitChart from '../echarts/flux/visitchart'
	import coreChart from '../echarts/flux/corechart'
	import averageChart from '../echarts/flux/average'
	import browseChart from '../echarts/flux/browse'
	import bounceChart from '../echarts/flux/bounce'
	import avertimeChart from '../echarts/flux/avertime'
	import makeChart from '../echarts/flux/makeup'
	import chengChart from '../echarts/trade/chengjiao'
	import payChart from '../echarts/trade/pay'
	import orderChart from '../echarts/trade/order'
	import paygeChart from '../echarts/trade/paychange'
	import ordergeChart from '../echarts/trade/orderchange'
	import priceChart from '../echarts/trade/price'
	import userChart from '../echarts/trade/userorder'
	import sellChart from '../echarts/trade/sell'
	import goodsvChart from '../echarts/goods/goodsv'
	import goodsaChart from '../echarts/goods/goodsadd'
	import goodscChart from '../echarts/goods/goodschange'
	import goodspChart from '../echarts/goods/goodspay'
	import goodsperChart from '../echarts/goods/goodsper'
	import goodspinChart from '../echarts/goods/goodspin'
	export default {
		components: {
			Chart,
			/*swiper, 
			swiperSlide,*/
			slideSwiper,
			
			coreChart,
			visitChart,
			averageChart,
			browseChart,
			bounceChart,
			avertimeChart,
			makeChart,
			chengChart,
			payChart,
			orderChart,
			paygeChart,
			ordergeChart,
			priceChart,
			userChart,
			sellChart,
			goodsvChart,
			goodsaChart,
			goodscChart,
			goodspChart,
			goodsperChart,
			goodspinChart
		},
		data() {
			return {
				value8: '',
				countNum: 666666,
				options: [{
					value: '选项1',
					label: 'APP'
				}, {
					value: '选项2',
					label: 'PC端'
				}, {
					value: '选项3',
					label: 'WAP端'
				}, {
					value: '选项4',
					label: '微商城'
				}, {
					value: '选项5',
					label: '触屏机'
				}],
				value: '',
				today: '',
				/*swiperOption: {  
	                notNextTick: true,  
	                pagination: '.swiper-pagination',  
	                slidesPerView: 'auto',  
	                centeredSlides: true,  
	                paginationClickable: true,  
	                spaceBetween: 30,  
	                    onSlideChangeEnd: swiper => {  
	                        //这个位置放swiper的回调方法  
	                        this.page = swiper.realIndex+1;  
	                        this.index = swiper.realIndex;  
                    }  
                }*/
			}
		},
		computed: {
			nowDay: function() {
				let d = new Date();
				let year = d.getFullYear();
				let month = d.getMonth() + 1;
				let day = d.getDate();
				let h = d.getHours();
				let m = d.getMinutes();
				let s = d.getSeconds();
				h = h >= 10 ? h : '0' + h
				m = m >= 10 ? m : '0' + m
				s = s >= 10 ? s : '0' + s
				let nowday = year + '-' + month + '-' + day;
				this.value8 = nowday
				
				this.today = year + '-' + month + '-' + day + ' ' + h + ':' + m + ':' + s
//				console.log(nowday)
			}
		},
		methods: {
			addDay: function() {
				let d = new Date(this.value8);
				let year = d.getFullYear();
				let month = d.getMonth() + 1;
				let day = d.getDate();
				day += 1;
				//				if()
				let newday = year + '-' + month + '-' + day;
				this.value8 = newday;
				console.log(newday)
			},
			subDay: function() {
				let d = new Date(this.value8);
				let year = d.getFullYear();
				let month = d.getMonth() + 1;
				let day = d.getDate();
				day -= 1;
				let newday = year + '-' + month + '-' + day;
				this.value8 = newday;
				console.log(newday)
			},
			toThousand: function() {
				this.countNum = toThousands(this.countNum);
				console.log(toThousands(this.countNum))
			},
			

		},
		mounted() {
//			this.toThousand();
			
//			this.nowDay()
		}
	}
</script>

<style scoped="scoped">
	/*@import '../../styles/swiper.min.css';*/
	.header-nav {
		height: 54px;
		line-height: 54px;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #f2f2f2;
	}
	
	.all-left {
		float: left;
		margin-left: 15px;
	}
	
	.all-left p:nth-of-type(1) {
		font-size: 20px;
		font-weight: 700;
	}
	
	.all-left p:nth-of-type(2) {
		font-size: 16px;
		color: #7b8390;
	}
	
	.all-right {
		float: right;
		margin-right: 30px;
	}
	
	.all-right p a {
		line-height: 60px;
		font-size: 12px;
		color: #1ea0fe;
	}
	
	.select-menu {
		width: 100px;
		height: 40px;
		line-height: 40px;
		text-align: center;
		margin-top: 10px;
		border: 1px solid gray;
	}
	
	.headerNav {
		margin: 0 10px;
		float: left;
	}
	
	.headerNav span {
		line-height: 65px;
		font-size: 12px;
		color: #7b8390;
	}
	
	.headerNav .headfirst {
		border-left: 4px solid #4c97fd;
		padding: 0 10px;
		color: #444444;
		font-size: 18px;
		line-height: 60px;
	}
	
	.el-icon-time {
		font-size: 18px;
		font-weight: 500;
	}
	
	.showChart {
		height: 330px;
	}
	
	.showChart .leftchart {
		height: 100%;
		width: 65%;
		position: relative;
		float: left;
	}
	
	#myEchart {
		width: 100%;
		height: 250px;
		position: absolute;
		top: 83px;
		left: -35px;
	}
	
	.payShow {
		margin-top: 35px;
		margin-left: 37px;
	}
	
	.payShow p {
		font-size: 14px;
		color: #6d7583;
	}
	
	.payShow p:nth-of-type(1) {
		/*margin-right: 10px;*/
		font-size: 15px;
		color: #333333;
	}
	
	.payShow p:nth-of-type(1) span {
		font-size: 12px;
	}
	
	.payShow p:nth-of-type(2) {
		font-size: 30px;
		margin: 15px 0;
		color: #4898fe;
	}
	
	.payShow p:nth-of-type(2) span {
		margin-left: 20px;
		margin-right: 7px;
		font-size: 14px;
		color: #888;
	}
	
	.payShow p:nth-of-type(2) em {
		font-style: normal;
		font-size: 14px;
		color: #333;
	}
	
	.payShow p:nth-of-type(2) i {
		font-size: 17px;
		font-weight: 700;
		margin-right: 4px;
	}
	
	.payShow p:nth-of-type(3) span {
		margin-left: 5px;
	}
	
	.showData {
		/*float: left;*/
		height: 330px;
		display: flex;
		justify-content: space-between;
		border-left: 1px solid #EDEDED;
		/*border: 1px solid red;*/
		padding: 0 32px;
	}
	
	.showData .payData p:nth-of-type(1) {
		font-size: 15px;
		color: #3d3f4e;
	}
	
	.showData .payData p:nth-of-type(1) i {
		font-size: 25px;
		font-weight: 400;
	}
	
	.select-pickday {
		clear: both;
	}
	
	.select-pickday ul {
		/*clear: both;*/
		float: left;
		width: 290px;
		height: 30px;
		line-height: 30px;
		background: #fff;
		font-size: 12px;
		margin: 22px 15px;
		border: 1px solid #efefef;
	}
	
	.select-pickday ul li {
		list-style: none;
		float: left;
		text-align: center;
		cursor: pointer;
	}
	
	.line {
		width: 450px;
		margin: 36px 0;
		border-bottom: 1px solid #ededed;
		float: left;
	}
	
	.to-day {
		width: 78px;
	}
	
	.now-day {
		border-left: 1px solid #ededed;
		border-right: 1px solid #ededed;
	}
	/*核心指标*/
	.core {
		border-radius: 8px;
		border: 1px solid #eee;
		background: #fff;
		clear: both;
	}
	
	.core-main {
		margin-top: 30px;
		overflow: hidden;
	}
	
	.core-main-top {
		/*border: 1px solid red;*/
		box-sizing: border-box;
		overflow: hidden;
		/*width: 1236px;*/
	}
	
	.core-main-top div {
		float: left;
	}
	
	.core-main-top .jiantou {
		line-height: 165px;
		margin: 0 12px;
	}
	
	.core-main-top ul {
		border: 1px solid #ededef;
		overflow: hidden;
	}
	
	.core-main-top ul li {
		float: left;
	}
	
	.core-main-top ul li:nth-of-type(2) {
		border-left: 1px solid #ededef;
		border-right: 1px solid #ededef;
	}
	
	.core-main-top ul li:nth-of-type(4) {
		border-left: 1px solid #ededef;
		border-right: 1px solid #ededef;
	}
	
	.core-main-top ul li:nth-of-type(5) {
		border-right: 1px solid #ededef;
	}
	.core-main-top .content-ul{
		/*margin-left: 40px;*/
		/*width: 1236px;*/
	}
	.core-main-top .content-ul .swiper-wraper .corelist {
		/*text-align: center;*/
		padding: 26px 0 26px 26px;
		font-size: 16px;
		width: 192px;
		color: #333;
		box-sizing: border-box;
		background: #fbfbfb;
		/*border: 1px solid red;*/
	}
	
	.core-main-top .corelist p:nth-of-type(1) span {
		font-size: 12px;
		margin-left: 5px;
	}
	
	.core-main-top .corelist p:nth-of-type(2) {
		font-size: 25px;
		margin: 16px 0;
	}
	
	.core-main-top .corelist p:nth-of-type(2) span {
		font-size: 18px;
		margin-left: 5px;
	}
	
	.core-main-top .corelist p:nth-of-type(3),
	.core-main-top .corelist p:nth-of-type(4) {
		font-size: 14px;
		color: #888;
	}
	
	.core-main-top .corelist p:nth-of-type(3) span {
		margin-left: 38px;
	}
	
	.core-main-top .corelist p:nth-of-type(3) i {
		color: #ff4949;
	}
	
	.core-main-top .corelist p:nth-of-type(4) span {
		margin-left: 24px;
	}
	
	.core-main-top .corelist p:nth-of-type(4) i {
		color: #14ce00;
	}
	
	.core-main-bottom {
		clear: both;
		margin-top: 18px;
	}
	
	.core-main-bottom .core-main-bottom1 {
		padding: 14px 0;
		margin-left: 45px;
	}
	
	.check-on p {
		float: left;
		font-size: 13px;
		color: #333;
		margin: 0 12px;
	}
	
	.check-on p span {
		display: inline-block;
		width: 9px;
		height: 9px;
		border-radius: 50%;
		background: #ffb70b;
		margin-right: 5px;
	}
	
	.coreechart {
		height: 300px;
	}
	/*流量分析*/
	.flux {
		background: #fff;
		margin-top: 18px;
		border-radius: 8px;
		overflow: hidden;
	}
	
	.flux-main-content {
		float: left;
		box-sizing: border-box;
	}
	
	.flux-main-left {
		width: 428px;
		border-right: 1px solid #ededef;
	}
	
	.flux-main-left .flux-list {
		float: left;
		width: 138px;
		margin: 22px 31px 0px 40px;
	}
	
	.flux-list-div {}
	
	.flux-list-div p:nth-of-type(1) {
		font-size: 17px;
		color: #333;
	}
	
	.flux-list-div p:nth-of-type(2) {
		font-size: 25px;
		color: #333;
		margin: 13px 0 10px 0;
	}
	
	.flux-list-div p:nth-of-type(3) {
		font-size: 14px;
		color: #929292;
	}
	
	.flux-list-div p:nth-of-type(3) span {
		color: #333;
		margin-left: 23px;
	}
	
	.visitchart {
		position: relative;
		margin-top: 10px;
		width: 138px;
		height: 60px;
		/*border: 1px solid red;*/
	}
	
	.visitchart .visitchart1 {
		position: absolute;
		width: 138px;
		height: 60px;
		top: 10px;
		left: -20px;
		/*border: 1px solid black;*/
	}
	.flux-main-mid{
		width: 380px;
		padding: 0 35px;
		border-right: 1px solid #ededef;
	}
	.flux-mid-head{
		overflow: hidden;
		margin-top: 22px;
		font-size: 16px;
		color: #323232;
		padding: 0 7px;
	}
	.flux-mid-text{
		float: left;
		font-weight: 600;
	}
	.flux-mid-text span {
		font-size: 13px;
		font-weight: 600;
		color: #fc4a48;
		margin-left: 7px;
	}
	.flux-mid-select {
		float: right;
		width: 80px;
		height: 21px;
		border: 1px solid #ededef;
		border-radius: 3px;
	}
	.flux-mid-main{
		margin-top: 23px;
	}
	.flux-main-top{
		height: 33px;
		border-top: 1px solid #ededef;
		border-bottom: 1px solid #ededef;
		line-height: 35px;
		padding: 0 7px;
	}
	.flux-main-top span:nth-of-type(2){
		margin: 0 45px;
	}
	.flux-main-list li:nth-of-type(1) .progress-div{
		margin-left: 50px;
	}
	.flux-li{
		box-sizing: border-box;
		padding: 35px 7px;
		height: 75px;
		border-bottom: 1px solid #ededef;
		font-size: 14px;
		color: #333;
	}
	.flux-li:hover{
		background: #fef1e1;
	}
	.list-item .floatleft{
		float: left;
	}
	.progress-div {
		margin: 0 40px 0 20px;
		width: 100px;
	}
	.progress-div span{
		display: block;
		float: left;
	}
	.progress-div .progress{
		float: left;
		line-height: 75px;
		margin-left: 10px;
	}
	.flux-mid-foot{
		margin-top:16px ;
	}
	.flux-mid-foot p {
		font-size: 15px;
		color: #333;
	}
	.flux-mid-foot p span{
		display: inline-block;
		width: 9px;
		height: 9px;
		border-radius: 50%;
		background: #20a1ff;
		margin-right: 10px;
	}
	.flux-main-right{
		padding: 0 35px;
		width: 428px;
		box-sizing: border-box;
		/*border: 1px solid red;*/
	}
	.flux-right-head {
		height: 60px;
		width: 338px;
		padding: 3px 7px;
		border-bottom: 1px solid #ededef;
	}
	.flux-right-head p{
		font-size: 16px;
		font-weight: 600;
		color: #333;
		line-height: 60px;
	}
	.make-chart{
		/*border: 1px solid black;*/
		width: 358px;
		height: 380px;
	}
	
	/*交易分析*/
	.trade{
		margin-top: 30px;
		background: #fff;
		border-radius: 8px;
		overflow: hidden;
	}
	.user-order{
		margin-top: 30px;
		padding: 12px 7px;
		padding-top: 0;
		border-bottom: 1px solid #ededef;
	}
	.user-chart{
		height: 180px;
		width: 200px;
		margin: 0 auto;
	}
	.flux-main-list .jiaoyi-li{
		height: 44px;
		padding: 12px 0;
		/*line-height: 44px;*/
		box-sizing: border-box;
	}
	/*商品分析*/
	
	.goods{
		margin-top: 30px;
		background: #fff;
		border-radius: 8px;
		overflow: hidden;
		margin-bottom: 35px;
	}
	
	.goods .goods-top span{
		display: inline-block;
	}
	.goods .goods-top span:nth-of-type(1){
		float: left;
	}
	.goods .goods-top span:nth-of-type(2){
		float: right;
		margin-right: 0;
	}
	.goods-list li{
		border-bottom: 1px solid #ededef;
		height: 84px;
		box-sizing: border-box;
		padding: 10px;
	}
	.goods-list li:hover{
		background: #fef1e1;
	}
	.goods-list .goods-name{
		float: left;
	}
	.goods-list .goods-name .goods-img{
		float: left;
		width: 60px;
		height: 60px;
		border: 1px solid #ededef;
	}
	.goods-list .goods-name .goods-img img{
		display: block;
		width: 60px;
		height: 60px;
	}
	.goods-list .goods-name .goods-info{
		float: right;
		line-height: 64px;
		margin-left: 9px;
		
	}
	.goods-list .goods-num{
		float: right;
		line-height: 64px;
	}
 </style>