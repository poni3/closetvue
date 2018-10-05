<template>
    <div id="list-article" class="content scaffold-list" role="main">
        <div class="nav" role="navigation">
            <a href="/articles/questions/create" class="create btn btn-success btn-wide pull-right"><i class="fa fa-pencil"></i>
                새 글 쓰기</a>
            <h4>옷 장</h4>
            <form action="/articles/questions" method="get" name="category-filter-form" id="category-filter-form">
                <div class="category-filter-wrapper">
                    <div class="category-filter-query pull-right">
                        <div class="input-group input-group-sm">
                            <input type="search" name="query" id="search-field" class="form-control" placeholder="검색어"
                                value="">
                            <span class="input-group-btn">
                                <button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button>
                            </span>
                        </div>
                    </div>
                    <ul class="list-sort pull-left">
                        <li><a href="/articles/questions?sort=id&amp;order=desc" data-sort="id" data-order="desc" class="category-sort-link active">아우터</a></li>
                        <li><a href="/articles/questions?sort=voteCount&amp;order=desc" data-sort="voteCount" data-order="desc"
                                class="category-sort-link ">상의</a></li>
                        <li><a href="/articles/questions?sort=noteCount&amp;order=desc" data-sort="noteCount" data-order="desc"
                                class="category-sort-link ">하의</a></li>
                        <li><a href="/articles/questions?sort=scrapCount&amp;order=desc" data-sort="scrapCount" data-order="desc"
                                class="category-sort-link ">신발</a></li>
                        <li><a href="/articles/questions?sort=viewCount&amp;order=desc" data-sort="viewCount" data-order="desc"
                                class="category-sort-link ">악세사리</a></li>
                    </ul>
                    <input type="hidden" name="sort" id="category-sort-input" value="id">
                    <input type="hidden" name="order" id="category-order-input" value="desc">
                </div>
            </form>
        </div>
        <div class="okkys-choice">
            <div class="panel panel-default">
                    <!-- <img src="../assets/hello.png" height="100" width="100" >
                    <img src="../assets/hello.png" height="100" width="100" >
                    <img src="../assets/hello.png" height="100" width="100" >
                    <div class="imageContainer"> -->
            </div>
            <div class="panel panel-default">
                <!-- Table -->
                <ul class="list-group">
                    <li class="list-group-item list-group-item-question list-group-no-note clearfix">
                        <div class="list-title-wrapper clearfix">
                            <div class="list-tag clearfix">
                                <span class="list-group-item-text article-id">#504654</span>
                                <a href="/articles/tech-qna" class="list-group-item-text item-tag label label-info"><i class="fa fa-database"></i>
                                    Tech Q&amp;A</a>
                            </div>
                            <h5 class="list-group-item-heading list-group-item-evaluate">
                                <a href="/article/504654">

                                    리눅스 톰캣에 jsp 베포 질문드립니다.
                                </a>
                            </h5>
                        </div>
                        <div class="list-summary-wrapper clearfix">
                            <div class="item-evaluate-wrapper pull-right clearfix">
                                <div class="item-evaluate">
                                    <div class="item-evaluate-icon">
                                        <i class="item-icon fa fa-thumbs-o-up"></i>
                                    </div>
                                    <div class="item-evaluate-count">
                                        <span>0
                                        </span></div>
                                </div>
                                <div class="item-evaluate item-evaluate-no-note">
                                    <div class="item-evaluate-icon">
                                        <i class="item-icon fa fa-question-circle"></i>
                                    </div>
                                    <div class="item-evaluate-count">
                                        0
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="list-group-item-author clearfix">
                            <div class="avatar avatar-list clearfix "><a href="/user/info/70594" class="avatar-photo"><img src="//www.gravatar.com/avatar/74e64c5deb7fc2115b71b91684627081?d=identicon&amp;s=30"></a>
                                <div class="avatar-info"><a class="nickname" href="/user/info/70594" title="ctrlcctrlv">ctrlcctrlv</a>
                                    <div class="activity"><span class="fa fa-flash"></span> 30</div>
                                    <div class="date-created"><span class="timeago" title="2018-09-20 12:56:33.0">2018-09-20
                                            12:56:33</span> </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item list-group-item-question list-group-success clearfix">
                        <div class="list-title-wrapper clearfix">
                            <div class="list-tag clearfix">
                                <span class="list-group-item-text article-id">#504649</span>
                                <a href="/articles/tech-qna" class="list-group-item-text item-tag label label-info"><i class="fa fa-database"></i>
                                    Tech Q&amp;A</a>
                                <a href="/articles/tagged/HTML" class="list-group-item-text item-tag label label-gray">HTML</a>
                            </div>

                            <h5 class="list-group-item-heading list-group-item-evaluate">
                                <a href="/article/504649">
                                    HTML 태그 관련 두가지 질문드릴게 있습니다.
                                </a>
                            </h5>
                        </div>
                        <div class="list-summary-wrapper clearfix">
                            <div class="item-evaluate-wrapper pull-right clearfix">
                                <div class="item-evaluate">
                                    <div class="item-evaluate-icon">
                                        <i class="item-icon fa fa-thumbs-o-up"></i>
                                    </div>
                                    <div class="item-evaluate-count">
                                        <span>0
                                        </span></div>
                                </div>
                                <div class="item-evaluate item-evaluate-success">
                                    <div class="item-evaluate-icon">

                                        <i class="item-icon fa fa-check-circle"></i>

                                    </div>
                                    <div class="item-evaluate-count">
                                        2
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="list-group-item-author clearfix">
                            <div class="avatar avatar-list clearfix "><a href="/user/info/64851" class="avatar-photo"><img src="//www.gravatar.com/avatar/e879d86fb2f815e9c2e46adea5eac79b?d=identicon&amp;s=30"></a>
                                <div class="avatar-info"><a class="nickname" href="/user/info/64851" title="쏵쏵">쏵쏵</a>
                                    <div class="activity"><span class="fa fa-flash"></span> 20</div>
                                    <div class="date-created"><span class="timeago" title="2018-09-20 12:37:34.0">2018-09-20
                                            12:37:34</span> </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item list-group-item-question list-group-success clearfix">
                        <div class="list-title-wrapper clearfix">
                            <div class="list-tag clearfix">
                                <span class="list-group-item-text article-id">#504559</span>
                                <a href="/articles/tech-qna" class="list-group-item-text item-tag label label-info"><i class="fa fa-database"></i>
                                    Tech Q&amp;A</a>
                            </div>
                            <h5 class="list-group-item-heading list-group-item-evaluate">
                                <a href="/article/504559">
                                    자바 용어 질문
                                </a>
                            </h5>
                        </div>
                        <div class="list-summary-wrapper clearfix">
                            <div class="item-evaluate-wrapper pull-right clearfix">
                                <div class="item-evaluate">
                                    <div class="item-evaluate-icon">
                                        <i class="item-icon fa fa-thumbs-o-up"></i>
                                    </div>
                                    <div class="item-evaluate-count">
                                        <span>0
                                        </span></div>
                                </div>
                                <div class="item-evaluate item-evaluate-success">
                                    <div class="item-evaluate-icon">

                                        <i class="item-icon fa fa-check-circle"></i>

                                    </div>
                                    <div class="item-evaluate-count">
                                        5
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="list-group-item-author clearfix">
                            <div class="avatar avatar-list clearfix "><a href="/user/info/64529" class="avatar-photo"><img src="//www.gravatar.com/avatar/84981badeaee60d7a401fb291a5c186f?d=identicon&amp;s=30"></a>
                                <div class="avatar-info"><a class="nickname" href="/user/info/64529" title="마커스">마커스</a>
                                    <div class="activity"><span class="fa fa-flash"></span> 338</div>
                                    <div class="date-created"><span class="timeago" title="2018-09-20 10:06:33.0">2018-09-20
                                            10:06:33</span> </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="text-center">
                <ul class="pagination pagination-sm">
                    <li class="prev disabled"><span>«</span></li>
                    <li class="active"><span>1</span></li>
                    <li><a href="/articles/questions?offset=20&amp;max=20&amp;sort=id&amp;order=desc" class="step">2</a></li>
                    <li><a href="/articles/questions?offset=40&amp;max=20&amp;sort=id&amp;order=desc" class="step">3</a></li>
                    <li><a href="/articles/questions?offset=60&amp;max=20&amp;sort=id&amp;order=desc" class="step">4</a></li>
                    <li><a href="/articles/questions?offset=80&amp;max=20&amp;sort=id&amp;order=desc" class="step">5</a></li>
                    <li class="disabled"><span>...</span></li>
                    <li><a href="/articles/questions?offset=126620&amp;max=20&amp;sort=id&amp;order=desc" class="step">6332</a></li>
                    <li class="next"><a href="/articles/questions?offset=20&amp;max=20&amp;sort=id&amp;order=desc" class="step">»</a></li>
                </ul>

            </div>
        </div>
    </div>
</template>

<script>
export default {
  data: function () {
    return {
      user: {
        id: '',
        password: '',
        name: ''
      }
    }
  }
}
</script>

<style>
.imageContainer {
    float: left;
}
</style>
