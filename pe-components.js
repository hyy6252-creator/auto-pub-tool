// pe.html 컴포넌트 DB - 자동 생성
const PE_COMPONENTS = {
  "pagenation": {
    id: "pagenation",
    title: "페이지네이션",
    code: `<div class="pe-pagination">
					  <span class="page-navi prev disabled">이전</span>
					  <div class="page-links">
						<a class="page-link active" href="#"><span class="sr-only">현재페이지 </span>1</a>
						<a class="page-link" href="#">2</a>
						<a class="page-link" href="#">3</a>
						<a class="page-link" href="#">4</a>
						<a class="page-link" href="#">5</a>
						<a class="page-link" href="#">6</a>
						<a class="page-link" href="#">7</a>
						<a class="page-link" href="#">8</a>
						<span class="page-link link-dot"></span>
						<a class="page-link" href="#">99</a>
					  </div>
					  <a class="page-navi next" href="#">다음</a>
					</div>
					
					<div class="pe-pagination">
					  <a class="page-navi prev" href="#">이전</a>
					  <div class="page-links">
						<a class="page-link" href="#">1</a>
						<a class="page-link" href="#">2</a>
						<a class="page-link" href="#">3</a>
						<a class="page-link active" href="#"><span class="sr-only">현재페이지 </span>4</a>
						<a class="page-link" href="#">5</a>
						<a class="page-link" href="#">6</a>
						<a class="page-link" href="#">7</a>
						<a class="page-link" href="#">8</a>
						<span class="page-link link-dot"></span>
						<a class="page-link" href="#">99</a>
					  </div>
					  <a class="page-navi next" href="#">다음</a>
					</div>
					
					
					<div class="pe-pagination">
					  <a class="page-navi prev" href="#">이전</a>
					  <div class="page-links">
						<a class="page-link" href="#">1</a>
						<span class="page-link link-dot"></span>
						<a class="page-link" href="#">3</a>
						<a class="page-link" href="#">4</a>
						<a class="page-link active" href="#"><span class="sr-only">현재페이지 </span>5</a>
						<a class="page-link" href="#">6</a>
						<a class="page-link" href="#">7</a>
						<a class="page-link" href="#">8</a>
						<span class="page-link link-dot"></span>
						<a class="page-link" href="#">99</a>
					  </div>
					  <a class="page-navi next" href="#">다음</a>
					</div>
					
					<div class="pe-pagination">
					  <a class="page-navi prev" href="#">이전</a>
					  <div class="page-links">
						<a class="page-link" href="#">1</a>
						<span class="page-link link-dot"></span>
						<a class="page-link" href="#">92</a>
						<a class="page-link" href="#">93</a>
						<a class="page-link" href="#">94</a>
						<a class="page-link" href="#">95</a>
						<a class="page-link" href="#">96</a>
						<a class="page-link" href="#">97</a>
						<a class="page-link" href="#"><span class="sr-only">현재페이지 </span>98</a>
						<a class="page-link active" href="#">99</a>
					  </div>
					  <span class="page-navi next disabled">다음</span>
					</div>`
  },
  "modal": {
    id: "modal",
    title: "모달",
    code: `<a href="/pcms/common/cancelation.html" class="btn primary medium" data-button="ajaxModal" data-url="/pcms/common/cancelation.html" data-target="cancelation-modal01" data-focus-prev="ajaxModalClose" data-focus-next="cancelation-modal01">jqueryModal.js를 불러와야 합니다</a>

					<a href="/pcms/common/cancelation.html" class="btn primary medium" data-button="ajaxModal" data-url="/pcms/common/cancelation.html" data-target="cancelation-modal02" data-focus-prev="ajaxModalClose" data-focus-next="cancelation-modal02">jqueryModal.js를 불러와야 합니다</a>

					<script src="/pcms/common/pluigs/jqueryModal/jqueryModal.js"></script>
					<!-- 현재 페이지에선 작동 안됨. 임시 페이지 생성해서 테스트 하세요. -->
					<!-- 주의사항: data-target값과 data-focus-next값은 일치해야 함.(포커스 측면에서 접근성 향상) -->`
  },
  "badge": {
    id: "badge",
    title: "배지",
    code: `<h3 class="h3">outline 배지</h3>
					<span class="pe-badge outline primary">Label</span>
					<span class="pe-badge outline secondary">Label</span>
					<span class="pe-badge outline gray">Label</span>
					<span class="pe-badge outline point">Label</span>
					<span class="pe-badge outline danger">Label</span>
					<span class="pe-badge outline warning">Label</span>
					<span class="pe-badge outline success">Label</span>
					<span class="pe-badge outline information">Label</span>
					<span class="pe-badge outline disabled">Label</span>
					<br><br>				
					<span class="pe-badge outline large primary">Label</span>
					<span class="pe-badge outline large secondary">Label</span>
					<span class="pe-badge outline large gray">Label</span>
					<span class="pe-badge outline large point">Label</span>
					<span class="pe-badge outline large danger">Label</span>
					<span class="pe-badge outline large warning">Label</span>
					<span class="pe-badge outline large success">Label</span>
					<span class="pe-badge outline large information">Label</span>
					<span class="pe-badge outline large disabled">Label</span>
					
					<h3 class="h3">bg 배지</h3>
					<span class="pe-badge bg primary">Label</span>
					<span class="pe-badge bg secondary">Label</span>
					<span class="pe-badge bg gray">Label</span>
					<span class="pe-badge bg point">Label</span>
					<span class="pe-badge bg danger">Label</span>
					<span class="pe-badge bg warning">Label</span>
					<span class="pe-badge bg success">Label</span>
					<span class="pe-badge bg information">Label</span>
					<span class="pe-badge bg disabled">Label</span>
					<br><br>				
					<span class="pe-badge bg large primary">Label</span>
					<span class="pe-badge bg large secondary">Label</span>
					<span class="pe-badge bg large gray">Label</span>
					<span class="pe-badge bg large point">Label</span>
					<span class="pe-badge bg large danger">Label</span>
					<span class="pe-badge bg large warning">Label</span>
					<span class="pe-badge bg large success">Label</span>
					<span class="pe-badge bg large information">Label</span>
					<span class="pe-badge bg large disabled">Label</span>
					
					<h3 class="h3">bg-light 배지</h3>
					<span class="pe-badge bg-light primary">Label</span>
					<span class="pe-badge bg-light secondary">Label</span>
					<span class="pe-badge bg-light gray">Label</span>
					<span class="pe-badge bg-light point">Label</span>
					<span class="pe-badge bg-light danger">Label</span>
					<span class="pe-badge bg-light warning">Label</span>
					<span class="pe-badge bg-light success">Label</span>
					<span class="pe-badge bg-light information">Label</span>
					<span class="pe-badge bg-light disabled">Label</span>
					<br><br>
					<span class="pe-badge bg-light large primary">Label</span>
					<span class="pe-badge bg-light large secondary">Label</span>
					<span class="pe-badge bg-light large gray">Label</span>
					<span class="pe-badge bg-light large point">Label</span>
					<span class="pe-badge bg-light large danger">Label</span>
					<span class="pe-badge bg-light large warning">Label</span>
					<span class="pe-badge bg-light large success">Label</span>
					<span class="pe-badge bg-light large information">Label</span>
					<span class="pe-badge bg-light large disabled">Label</span>`
  },
  "radio": {
    id: "radio",
    title: "라디오버튼",
    code: `<h3 class="h3">기본</h3>
					<div class="pe-check-area">
						<div class="pe-form-check">
							<input type="radio" name="rdo_1" id="rdo_1" title="기본 선택">
							<label for="rdo_1">기본</label>
						</div>
						<div class="pe-form-check">
							<input type="radio" name="rdo_1" id="rdo_2" title="선택됨 선택" checked>
							<label for="rdo_2">선택됨</label>
						</div>
						<div class="pe-form-check">
							<input type="radio" name="rdo_3" id="rdo_3" title="비활성화 선택" disabled>
							<label for="rdo_3">비활성화</label>
						</div>
						<div class="pe-form-check">
							<input type="radio" name="rdo_3" id="rdo_4" title="선택된 비활성화 선택" disabled checked>
							<label for="rdo_4">선택된 비활성화</label>
						</div>
					</div>
					
					
					<h3 class="h3">설명</h3>
					<div class="pe-check-area">
						<div class="pe-form-check">
							<input type="radio" name="rdo_1-1" id="rdo_1-1" title="라디오버튼1 선택" checked>
							<label for="rdo_1-1">라디오버튼1</label>
							<div class="pe-form-check-cnt">
							<p class="pe-form-check-p">
								부가적인 설명이 들어갑니다.
							</p>
							</div>
						</div>
						<div class="pe-form-check">
							<input type="radio" name="rdo_1-1" id="rdo_1-2" title="라디오버튼2 선택" disabled>
							<label for="rdo_1-2">라디오버튼2</label>
							<div class="pe-form-check-cnt">
							<p class="pe-form-check-p">
								부가적인 설명이 들어갑니다.
							</p>
							</div>
						</div>
						<div class="pe-form-check">
							<input type="radio" name="rdo_1-1" id="rdo_1-3" title="라디오버튼3 선택" disabled checked>
							<label for="rdo_1-3">라디오버튼3</label>
							<div class="pe-form-check-cnt">
							<p class="pe-form-check-p">
								부가적인 설명이 들어갑니다.
							</p>
							</div>
						</div>
					</div>
					
					<h3 class="h3">사이즈</h3>
					<div class="pe-check-area">
						<div class="pe-form-check medium">
							<input type="radio" name="rdo_2-1" id="rdo_2-1" title="사이즈 미디움 선택">
							<label for="rdo_2-1">사이즈 : medium</label>
						</div>
						<div class="pe-form-check large">
							<input type="radio" name="rdo_2-1" id="rdo_2-2" title="사이즈 라지 선택">
							<label for="rdo_2-2">사이즈 : large</label>
						</div>
					</div>
					
					<h3 class="h3">sorting</h3>
					<div class="pe-check-area">
						<div class="pe-form-sorting medium">
							<input type="radio" name="rdo_3-1" id="rdo_3-1" title="분류 레이블1 선택">
							<label for="rdo_3-1">레이블1</label>
						</div>
						<div class="pe-form-sorting medium">
							<input type="radio" name="rdo_3-1" id="rdo_3-2" title="분류 레이블2 선택" checked>
							<label for="rdo_3-2">레이블2</label>
						</div>
					</div>
					<div class="pe-check-area">
						<div class="pe-form-sorting small">
							<input type="radio" name="rdo_3-3" id="rdo_3-3" title="분류 레이블1 선택">
							<label for="rdo_3-3">레이블1</label>
						</div>
						<div class="pe-form-sorting small">
							<input type="radio" name="rdo_3-3" id="rdo_3-4" title="분류 레이블2 선택" checked>
							<label for="rdo_3-4">레이블2</label>
						</div>
					</div>
					
					<!-- <h3 class="h3">chip</h3>
					<div class="pe-check-area">
						<div class="pe-form-chip">
						<input type="radio" class="radio" name="rdo_chip" id="rdo_chip_1">
						<label class="pe-form-chip-outline" for="rdo_chip_1">chip 상태 : default </label>
						</div>
						<div class="pe-form-chip">
						<input type="radio" class="radio" name="rdo_chip" id="rdo_chip_2" checked>
						<label class="pe-form-chip-outline" for="rdo_chip_2">chip 상태 : checked </label>
						</div>
						<div class="pe-form-chip">
						<input type="radio" class="radio" name="rdo_chip" id="rdo_chip_3" disabled>
						<label class="pe-form-chip-outline" for="rdo_chip_3">chip 상태 :disabled </label>
						</div>
					</div> -->`
  },
  "checkbox": {
    id: "checkbox",
    title: "체크박스",
    code: `<h3 class="h3">기본</h3>
				<div class="pe-check-area">
					<div class="pe-form-check">
					  <input type="checkbox" name="chk_1" id="chk_1" title="기본 선택">
					  <label for="chk_1">기본</label>
					</div>
					<div class="pe-form-check">
					  <input type="checkbox" name="chk_1" id="chk_2" title="선택됨 선택" checked>
					  <label for="chk_2">선택됨</label>
					</div>
					<div class="pe-form-check">
					  <input type="checkbox" name="chk_1" id="chk_3" title="비활성화 선택" disabled>
					  <label for="chk_3">비활성화</label>
					</div>
					<div class="pe-form-check">
					  <input type="checkbox" name="chk_1" id="chk_4" title="선택된 비활성화 선택" checked disabled>
					  <label for="chk_4">선택된 비활성화</label>
					</div>
				</div>

				<h3 class="h3">설명</h3>
				<div class="pe-check-area chk-column">
					<div class="pe-form-check">
					  <input type="checkbox" id="chk_additional_1" title="설명 체크박스1 선택" checked>
					  <label for="chk_additional_1">체크박스1</label>
					  <div class="pe-form-check-cnt">
						<p class="pe-form-check-p">
						  부가적인 설명이 들어갑니다.
						</p>
					  </div>
					</div>
					<div class="pe-form-check">
					  <input type="checkbox" id="chk_additional_2" title="설명 체크박스2 선택">
					  <label for="chk_additional_2">체크박스2</label>
					  <div class="pe-form-check-cnt">
						<p class="pe-form-check-p">
						  부가적인 설명이 들어갑니다.
						</p>
					  </div>
					</div>
					<div class="pe-form-check">
					  <input type="checkbox" id="chk_additional_3" title="설명 체크박스3 선택" disabled>
					  <label for="chk_additional_3">체크박스3</label>
					  <div class="pe-form-check-cnt">
						<p class="pe-form-check-p">
						  부가적인 설명이 들어갑니다.
						</p>
					  </div>
					</div>
					<div class="pe-form-check">
					  <input type="checkbox" id="chk_additional_4" title="설명 체크박스4 선택" checked disabled>
					  <label for="chk_additional_4">체크박스4</label>
					  <div class="pe-form-check-cnt">
						<p class="pe-form-check-p">
						  부가적인 설명이 들어갑니다.
						</p>
					  </div>
					</div>
				</div>

				<h3 class="h3">사이즈</h3>
				<div class="pe-check-area">
				  <div class="pe-form-check medium">
					<input type="checkbox" id="chk_1-2a" title="사이즈 미디움 선택">
					<label for="chk_1-2a">사이즈 : medium</label>
				  </div>
				  <div class="pe-form-check large">
					<input type="checkbox" id="chk_1-3a" title="사이즈 라지 선택">
					<label for="chk_1-3a">사이즈 : large</label>
				  </div>
				</div>`
  },
  "select": {
    id: "select",
    title: "셀렉트",
    code: `<select id="select_name" class="pe-form-select" title="선택창">
					<option value="">항목1</option>
					<option value="">항목2</option>
					<option value="">항목3</option>
					<option value="">항목4</option>
				</select>
				
				<h3 class="h3">사이즈</h3>
				<select id="select_size_large" class="pe-form-select large" title="사이즈 라지 선택창">
					<option value="">항목1</option>
					<option value="">항목2</option>
					<option value="">항목3</option>
					<option value="">항목4</option>
				</select>
				<select id="select_size_medium" class="pe-form-select medium" title="사이즈 미디움 선택창">
					<option value="">항목1</option>
					<option value="">항목2</option>
					<option value="">항목3</option>
					<option value="">항목4</option>
				</select>
				<select id="select_size_small" class="pe-form-select small" title="사이즈 스몰 선택창">
					<option value="">항목1</option>
					<option value="">항목2</option>
					<option value="">항목3</option>
					<option value="">항목4</option>
				</select>
			

				<h3 class="h3">default</h3>
				<div class="pe-form-select-group">
					<div class="pe-form-lable">
						<label for="select_name">레이블</label>
					</div>
					<p class="pe-form-info">입력시 필요한 정보를 입력해 주세요</p>
					<select id="select_name" name="select_name" class="pe-form-select" title="선택창">
						<option value="">항목1</option>
						<option value="">항목2</option>
						<option value="">항목3</option>
						<option value="">항목4</option>
					</select>
					<p class="pe-form-message">메시지를 입력해 주세요</p>
				</div>
				
				<h3 class="h3">completed</h3>
				<div class="pe-form-select-group">
					<div class="pe-form-lable">
						<label for="select_name2">레이블</label>
					</div>
					<p class="pe-form-info">입력시 필요한 정보를 입력해 주세요</p>
					<select id="select_name2" name="select_name2" class="pe-form-select completed" title="선택창">
						<option value="">항목1</option>
						<option value="">항목2</option>
						<option value="">항목3</option>
						<option value="">항목4</option>
					</select>
					<p class="pe-form-message">메시지를 입력해 주세요</p>
				</div>
				
				<h3 class="h3">error</h3>
				<div class="pe-form-select-group">
					<div class="pe-form-lable">
						<label for="select_name3">레이블</label>
					</div>
					<p class="pe-form-info">입력시 필요한 정보를 입력해 주세요</p>
					<select id="select_name3" name="select_name3" class="pe-form-select is-error" title="선택창">
						<option value="">항목1</option>
						<option value="">항목2</option>
						<option value="">항목3</option>
						<option value="">항목4</option>
					</select>
					<p class="pe-form-message">메시지를 입력해 주세요</p>
				</div>
				
				<h3 class="h3">disabled</h3>
				<div class="pe-form-select-group">
					<div class="pe-form-lable">
						<label for="select_name4">레이블</label>
					</div>
					<p class="pe-form-info">입력시 필요한 정보를 입력해 주세요</p>
					<select id="select_name4" name="select_name4" class="pe-form-select" title="선택창" disabled>
						<option value="">항목1</option>
						<option value="">항목2</option>
						<option value="">항목3</option>
						<option value="">항목4</option>
					</select>
					<p class="pe-form-message">메시지를 입력해 주세요</p>
				</div>
				
				
				<h3 class="h3">레이블</h3>
				<select id="select_sorting" name="select_sorting" class="pe-form-select-sort" title="선택창">
					<option value="">항목1</option>
					<option value="">항목2</option>
					<option value="">항목3</option>
					<option value="">항목4</option>
				</select>
				
				<h3 class="h3">레이블 사이즈</h3>
				<select id="select_sorting_large" name="select_sorting_large" class="pe-form-select-sort large" title="선택창">
					<option value="">항목1</option>
					<option value="">항목2</option>
					<option value="">항목3</option>
					<option value="">항목4</option>
				</select>
				<select id="select_sorting_medium" name="select_sorting_medium" class="pe-form-select-sort medium" title="선택창">
					<option value="">항목1</option>
					<option value="">항목2</option>
					<option value="">항목3</option>
					<option value="">항목4</option>
				</select>
				<select id="select_sorting_small" name="select_sorting_small" class="pe-form-select-sort small" title="선택창">
					<option value="">항목1</option>
					<option value="">항목2</option>
					<option value="">항목3</option>
					<option value="">항목4</option>
				</select>`
  },
  "tag": {
    id: "tag",
    title: "태그",
    code: `<h3 class="h3">기본</h3>
				<div class="pe-tag-wrap large">
					<span class="btn-tag">
					large
					<button type="button" class="btn-delete">
						<span class="sr-only">삭제</span>
					</button>
					</span>
					<span class="btn-tag">
					large
					<button type="button" class="btn-delete">
						<span class="sr-only">삭제</span>
					</button>
					</span>
					<span class="btn-tag">
					large
					<button type="button" class="btn-delete">
						<span class="sr-only">삭제</span>
					</button>
					</span>
				</div>
				<div class="pe-tag-wrap medium">
					<span class="btn-tag">
					medium
					<button type="button" class="btn-delete">
						<span class="sr-only">삭제</span>
					</button>
					</span>
					<span class="btn-tag">
					medium
					<button type="button" class="btn-delete">
						<span class="sr-only">삭제</span>
					</button>
					</span>
					<span class="btn-tag">
					medium
					<button type="button" class="btn-delete">
						<span class="sr-only">삭제</span>
					</button>
					</span>
				</div>
				<div class="pe-tag-wrap small">
					<span class="btn-tag">
					small
					<button type="button" class="btn-delete">
						<span class="sr-only">삭제</span>
					</button>
					</span>
					<span class="btn-tag">
					small
					<button type="button" class="btn-delete">
						<span class="sr-only">삭제</span>
					</button>
					</span>
					<span class="btn-tag">
					small
					<button type="button" class="btn-delete">
						<span class="sr-only">삭제</span>
					</button>
					</span>
				</div>

				<h3 class="h3">링크형</h3>
				<div class="pe-tag-wrap large">
					<a href="#" class="btn-tag link">large</a>
					<a href="#" class="btn-tag link">large</a>
					<a href="#" class="btn-tag link">large</a>
				</div>
				<div class="pe-tag-wrap medium">
					<a href="#" class="btn-tag link">medium</a>
					<a href="#" class="btn-tag link">medium</a>
					<a href="#" class="btn-tag link">medium</a>
				</div>
				<div class="pe-tag-wrap small">
					<a href="#" class="btn-tag link">small</a>
					<a href="#" class="btn-tag link">small</a>
					<a href="#" class="btn-tag link">small</a>
				</div>`
  },
  "indicator": {
    id: "indicator",
    title: "단계표시기",
    code: `<h2 class="h2">Full</h2>
				<ol class="step-indicator">
					<li class="step-indicator-item done">
						<div class="step-indicator-marker">
							<span class="marker-item">
								<i class="marker-icon" aria-hidden="true"></i>
							</span>
							<span class="marker-line"></span>
						</div>
						<div class="step-indicator-text">
							<span class="step-text-sub">1단계</span>
							<strong class="step-text-title">단계 제목</strong>
						</div>
					</li>
					<li class="step-indicator-item active">
						<div class="step-indicator-marker">
							<span class="marker-item">
								<i class="marker-icon" aria-hidden="true"></i>
							</span>
							<span class="marker-line"></span>
						</div>
						<div class="step-indicator-text">
							<span class="step-text-sub">2단계</span>
							<strong class="step-text-title">단계 제목</strong>
						</div>
					</li>
					<li class="step-indicator-item">
						<div class="step-indicator-marker">
							<span class="marker-item">
								<i class="marker-icon" aria-hidden="true"></i>
							</span>
							<span class="marker-line"></span>
						</div>
						<div class="step-indicator-text">
							<span class="step-text-sub">3단계</span>
							<strong class="step-text-title">단계 제목</strong>
						</div>
					</li>
					<li class="step-indicator-item">
						<div class="step-indicator-marker">
							<span class="marker-item">
								<i class="marker-icon" aria-hidden="true"></i>
							</span>
							<span class="marker-line"></span>
						</div>
						<div class="step-indicator-text">
							<span class="step-text-sub">4단계</span>
							<strong class="step-text-title">단계 제목</strong>
						</div>
					</li>
					<li class="step-indicator-item">
						<div class="step-indicator-marker">
							<span class="marker-item">
								<i class="marker-icon" aria-hidden="true"></i>
							</span>
							<span class="marker-line"></span>
						</div>
						<div class="step-indicator-text">
							<span class="step-text-sub">5단계</span>
							<strong class="step-text-title">단계 제목</strong>
						</div>
					</li>
					<li class="step-indicator-item">
						<div class="step-indicator-marker">
							<span class="marker-item">
								<i class="marker-icon" aria-hidden="true"></i> 
							</span>
							<span class="marker-line"></span>
						</div>
						<div class="step-indicator-text">
							<span class="step-text-sub">6단계</span>
							<strong class="step-text-title">단계 제목</strong>
						</div>
					</li>
					<li class="step-indicator-item">
						<div class="step-indicator-marker">
							<span class="marker-item">
								<i class="marker-icon" aria-hidden="true"></i>
							</span>
							<span class="marker-line"></span>
						</div>
						<div class="step-indicator-text">
							<span class="step-text-sub">7단계</span>
							<strong class="step-text-title">단계 제목</strong>
						</div>
					</li>
				</ol>

				<h2 class="h2">Fixed</h2>
				<ol class="step-indicator fixed">
					<li class="step-indicator-item done">
						<div class="step-indicator-marker">
							<span class="marker-item">
								<i class="marker-icon" aria-hidden="true"></i>
							</span>
							<span class="marker-line"></span>
						</div>
						<div class="step-indicator-text">
							<span class="step-text-sub">1단계</span>
							<strong class="step-text-title">단계 제목</strong>
						</div>
					</li>
					<li class="step-indicator-item active">
						<div class="step-indicator-marker">
							<span class="marker-item">
								<i class="marker-icon" aria-hidden="true"></i>
							</span>
							<span class="marker-line"></span>
						</div>
						<div class="step-indicator-text">
							<span class="step-text-sub">2단계</span>
							<strong class="step-text-title">단계 제목</strong>
						</div>
					</li>
					<li class="step-indicator-item">
						<div class="step-indicator-marker">
							<span class="marker-item">
								<i class="marker-icon" aria-hidden="true"></i>
							</span>
							<span class="marker-line"></span>
						</div>
						<div class="step-indicator-text">
							<span class="step-text-sub">3단계</span>
							<strong class="step-text-title">단계 제목</strong>
						</div>
					</li>
					<li class="step-indicator-item">
						<div class="step-indicator-marker">
							<span class="marker-item">
								<i class="marker-icon" aria-hidden="true"></i>
							</span>
							<span class="marker-line"></span>
						</div>
						<div class="step-indicator-text">
							<span class="step-text-sub">4단계</span>
							<strong class="step-text-title">단계 제목</strong>
						</div>
					</li>
					<li class="step-indicator-item">
						<div class="step-indicator-marker">
							<span class="marker-item">
								<i class="marker-icon" aria-hidden="true"></i>
							</span>
							<span class="marker-line"></span>
						</div>
						<div class="step-indicator-text">
							<span class="step-text-sub">5단계</span>
							<strong class="step-text-title">단계 제목</strong>
						</div>
					</li>
					<li class="step-indicator-item">
						<div class="step-indicator-marker">
							<span class="marker-item">
								<i class="marker-icon" aria-hidden="true"></i>
							</span>
							<span class="marker-line"></span>
						</div>
						<div class="step-indicator-text">
							<span class="step-text-sub">6단계</span>
							<strong class="step-text-title">단계 제목</strong>
						</div>
					</li>
					<li class="step-indicator-item">
						<div class="step-indicator-marker">
							<span class="marker-item">
								<i class="marker-icon" aria-hidden="true"></i>
							</span>
							<span class="marker-line"></span>
						</div>
						<div class="step-indicator-text">
							<span class="step-text-sub">7단계</span>
							<strong class="step-text-title">단계 제목</strong>
						</div>
					</li>
				</ol>

				<h2 class="h2">사용예시</h2>
				<div class="step-indicator-head">
					<strong class="step-indicator-title">약관동의</strong>

					<ol class="step-indicator fixed">
						<li class="step-indicator-item done">
							<div class="step-indicator-marker">
								<span class="marker-item">
									<i class="marker-icon" aria-hidden="true"></i>
								</span>
								<span class="marker-line"></span>
							</div>
							<div class="step-indicator-text">
								<span class="step-text-sub">1단계</span>
								<strong class="step-text-title">유의사항 확인</strong>
							</div>
						</li>
						<li class="step-indicator-item active">
							<div class="step-indicator-marker">
								<span class="marker-item">
									<i class="marker-icon" aria-hidden="true"></i>
								</span>
								<span class="marker-line"></span>
							</div>
							<div class="step-indicator-text">
								<span class="step-text-sub">2단계</span>
								<strong class="step-text-title">신청인 정보</strong>
							</div>
						</li>
						<li class="step-indicator-item">
							<div class="step-indicator-marker">
								<span class="marker-item">
									<i class="marker-icon" aria-hidden="true"></i>
								</span>
								<span class="marker-line"></span>
							</div>
							<div class="step-indicator-text">
								<span class="step-text-sub">3단계</span>
								<strong class="step-text-title">이사 전 살던 곳</strong>
							</div>
						</li>
						<li class="step-indicator-item">
							<div class="step-indicator-marker">
								<span class="marker-item">
									<i class="marker-icon" aria-hidden="true"></i>
								</span>
								<span class="marker-line"></span>
							</div>
							<div class="step-indicator-text">
								<span class="step-text-sub">4단계</span>
								<strong class="step-text-title">이사 온 곳</strong>
							</div>
						</li>
					</ol>
				</div>`
  },
  "input": {
    id: "input",
    title: "입력",
    code: `<div class="pe-form-title"><strong class="form-title">Large<span class="pilsu">필수</span></strong></div>
				<div class="input-item-wrap">
					<label class="input-item-title" for="input1_1">레이블</label>
					<div class="input-item-box">
						<input type="text" id="input1_1" name="input1_1" class="input-item lg" title="입력창" placeholder="내용을 입력해 주세요.">
					</div>
				</div>

				<div class="pe-form-title"><strong class="form-title">Medium</strong></div>
				<div class="input-item-wrap">
					<label class="input-item-title" for="input1_2">레이블</label>
					<div class="input-item-box">
						<input type="text" id="input2_2" name="input2_2" class="input-item" title="입력창" placeholder="내용을 입력해 주세요.">
					</div>
				</div>

				<div class="pe-form-title"><strong class="form-title">Small</strong></div>
				<div class="input-item-wrap">
					<label class="input-item-title" for="input1_3">레이블</label>
					<div class="input-item-box">
						<input type="text" id="input3_3" name="input3_3" class="input-item sm" title="입력창" placeholder="내용을 입력해 주세요.">
					</div>
				</div>
			
				<div class="pe-form-title"><strong class="form-title">Default</strong></div>
				<div class="input-item-wrap">
					<label class="input-item-title" for="input2_1">레이블</label>
					<div class="input-item-box">
						<input type="text" id="input2_1" name="input2_1" class="input-item lg" title="입력창" placeholder="내용을 입력해 주세요.">
					</div>
					<p class="input-message">메세지를 입력해 주세요.</p>
				</div>

				<div class="pe-form-title"><strong class="form-title">Completed</strong></div>
				<div class="input-item-wrap">
					<label class="input-item-title" for="input2_2">레이블</label>
					<div class="input-item-box">
						<input type="text" id="input2_2" name="input2_2" class="input-item lg completed" title="입력창" placeholder="내용을 입력해 주세요.">
					</div>
					<p class="input-message completed">메세지를 입력해 주세요.</p>
				</div>

				<div class="pe-form-title"><strong class="form-title">Error</strong></div>
				<div class="input-item-wrap">
					<label class="input-item-title" for="input2_3">레이블</label>
					<div class="input-item-box">
						<input type="text" id="input2_3" name="input2_3" class="input-item lg error" title="입력창" placeholder="내용을 입력해 주세요.">
					</div>
					<p class="input-message error">메세지를 입력해 주세요.</p>
				</div>

				<div class="pe-form-title"><strong class="form-title">Disabled</strong></div>
				<div class="input-item-wrap">
					<label class="input-item-title" for="input2_4">레이블</label>
					<div class="input-item-box">
						<input type="text" id="input2_4" name="input2_4" class="input-item lg" title="입력창" placeholder="내용을 입력해 주세요." disabled>
					</div>
				</div>

				<div class="pe-form-title"><strong class="form-title">View</strong></div>
				<div class="input-item-wrap">
					<label class="input-item-title" for="input8" for="input2_5">레이블</label>
					<div class="input-item-box">
						<input type="text" id="input2_5" name="input2_5" class="input-item lg" title="입력창" placeholder="내용을 입력해 주세요." readonly>
					</div>
				</div>

			
				<div class="pe-form-title"><strong class="form-title">Hint</strong></div>
				<div class="input-item-wrap">
					<label class="input-item-title" for="input3_1">레이블</label>
					<span class="input-item-subtit">입력시 필요한 정보를 입력하는 공간</span>
					<div class="input-item-box">
						<input type="text" id="input3_1" name="input3_1" class="input-item lg clear" title="입력창" placeholder="내용을 입력해 주세요.">
						<button type="button" class="input-clear"><span class="skip">삭제</span></button>
					</div>
				</div>

				<div class="pe-form-title"><strong class="form-title">Alert</strong></div>
				<div class="input-item-wrap">
					<label class="input-item-title" for="input3_2">레이블</label>
					<div class="input-item-box">
						<input type="text" id="input3_2" name="input3_2" class="input-item lg clear" title="입력창" placeholder="내용을 입력해 주세요.">
						<button type="button" class="input-clear"><span class="skip">삭제</span></button>
					</div>
					<p class="input-message">메세지를 입력해 주세요.</p>
				</div>

				<div class="pe-form-title"><strong class="form-title">혼합형</strong></div>
				<div class="input-item-wrap">
					<label class="input-item-title" for="input3_3">레이블</label>
					<span class="input-item-subtit">입력시 필요한 정보를 입력하는 공간</span>
					<div class="input-item-box">
						<input type="text" id="input3_3" name="input3_3" class="input-item lg clear" title="입력창" placeholder="내용을 입력해 주세요.">
						<button type="button" class="input-clear"><span class="skip">삭제</span></button>
					</div>
					<p class="input-message">메세지를 입력해 주세요.</p>
				</div>

				
				<div class="pe-form-title"><strong class="form-title">Label</strong></div>
				<div class="input-item-wrap">
					<label class="input-item-title" for="input4_1">레이블</label>
					<div class="input-item-box">
						<input type="text" id="input4_1" name="input4_1" class="input-item lg" title="입력창" placeholder="내용을 입력해 주세요.">
						<button type="button" class="input-clear"><span class="skip">삭제</span></button>
					</div>
				</div>

				<div class="pe-form-title"><strong class="form-title">Label_off</strong></div>
				<div class="input-item-wrap">
					<div class="input-item-box">
						<input type="text" id="input4_2" name="input4_2" class="input-item lg" title="입력창" placeholder="내용을 입력해 주세요.">
						<button type="button" class="input-clear"><span class="skip">삭제</span></button>
					</div>
				</div>

				
				<div class="pe-form-title"><strong class="form-title">Icon_on</strong></div>
				<div class="input-item-wrap">
					<label class="input-item-title" for="input1_1">레이블</label>
					<div class="input-item-box">
						<input type="text" id="input1_1" name="input1_1" class="input-item lg visible" title="비밀번호 입력창" placeholder="비밀번호를 입력해 주세요.">
						<button type="button" class="input-clear"><span class="skip">삭제</span></button>
						<button type="button" class="input-visible"><span class="skip">안보이게 숨기기</span></button>
					</div>
				</div>

				<div class="pe-form-title"><strong class="form-title">Icon_on ver2</strong></div>
				<div class="input-item-wrap">
					<label class="input-item-title" for="input1_2">레이블</label>
					<div class="input-item-box">
						<input type="password" id="input1_2" name="input1_2" class="input-item lg visible" title="비밀번호 입력창" placeholder="비밀번호를 입력해 주세요.">
						<button type="button" class="input-clear"><span class="skip">삭제</span></button>
						<button type="button" class="input-invisible"><span class="skip">보이게 표시하기</span></button>
					</div>
				</div>

				<div class="pe-form-title"><strong class="form-title">Icon_off</strong></div>
				<div class="input-item-wrap">
					<label class="input-item-title" for="input2_1">레이블</label>
					<div class="input-item-box">
						<input type="text" id="input2_1" name="input2_1" class="input-item" title="입력창" placeholder="내용을 입력해 주세요.">
						<button type="button" class="input-clear"><span class="skip">삭제</span></button>
					</div>
				</div>

				
				<div class="pe-form-title">
					<strong class="form-title">연월일시분 피커</strong>
				</div>
				<div class="pe-form-box gap-8">
					<div class="pe-form-item w-350">
						<div class="input-item-wrap">
							<label class="input-item-title" for="date_picker1_1">시작날짜</label>
							<div class="input-item-box picker">
								<input type="text" id="date_picker1_1" name="date_picker1_1" class="input-item lg" title="시작날짜 입력창" placeholder="YYYY-MM-DD HH:MM">
								<i class="picker-icon date-picker"></i>
							</div>
						</div>
					</div>
					<div class="pe-form-item">
						<span class="pe-form-text pt-15">~</span>
					</div>
					<div class="pe-form-item w-350">
						<div class="input-item-wrap">
							<label class="input-item-title" for="date_picker1_2">종료날짜</label>
							<div class="input-item-box picker">
								<input type="text" id="date_picker1_2" name="date_picker1_2" class="input-item lg" title="종료날짜 입력창" placeholder="YYYY-MM-DD HH:MM">
								<i class="picker-icon date-picker"></i>
							</div>
						</div>
					</div>
				</div>
				<div class="pe-form-box mt_25">
					<div class="pe-form-item w-350">
						<div class="input-item-wrap">
							<label class="input-item-title" for="date_picker2">단일</label>
							<div class="input-item-box picker">
								<input type="text" id="date_picker2" class="input-item lg" placeholder="YYYY-MM-DD HH:MM">
								<i class="picker-icon date-picker"></i>
							</div>
						</div>
					</div>
				</div>
				<div class="pe-form-box mt_25 gap-8">
					<div class="pe-form-item w-350">
						<div class="input-item-wrap">
							<label class="input-item-title" for="date_picker3_1">시작날짜</label>
							<div class="input-item-box picker">
								<input type="text" id="date_picker3_1" name="date_picker3_1" class="input-item lg" title="시작날짜 입력창" placeholder="YYYY-MM-DD">
								<i class="picker-icon date-picker"></i>
							</div>
						</div>
					</div>
					<div class="pe-form-item">
						<span class="pe-form-text pt-15">~</span>
					</div>
					<div class="pe-form-item w-350">
						<div class="input-item-wrap">
							<label class="input-item-title" for="date_picker3_2">종료날짜</label>
							<div class="input-item-box picker">
								<input type="text" id="date_picker3_2" name="date_picker3_2" class="input-item lg" title="종료날짜 입력창" placeholder="YYYY-MM-DD">
								<i class="picker-icon date-picker"></i>
							</div>
						</div>
					</div>
				</div>
				<div class="pe-form-box mt_25">
					<div class="pe-form-item w-350">
						<div class="input-item-wrap">
							<label class="input-item-title" for="date_picker4">단일</label>
							<div class="input-item-box picker">
								<input type="text" id="date_picker4" name="date_picker4" class="input-item lg" title="단일날짜 입력창" placeholder="YYYY-MM-DD">
								<i class="picker-icon date-picker"></i>
							</div>
						</div>
					</div>
				</div>

				<div class="pe-form-title">
					<strong class="form-title">시분 피커</strong>
				</div>
				<div class="pe-form-box gap-8">
					<div class="pe-form-item w-350">
						<div class="input-item-wrap">
							<label class="input-item-title" for="time_picker1_1">시작시간</label>
							<div class="input-item-box picker">
								<input type="text" id="time_picker1_1" name="time_picker1_1" class="input-item lg" title="시작시간 입력창" placeholder="HH:MM">
								<i class="picker-icon time-picker"></i>
							</div>
						</div>
					</div>
					<div class="pe-form-item">
						<span class="pe-form-text pt-15">~</span>
					</div>
					<div class="pe-form-item w-350">
						<div class="input-item-wrap">
							<label class="input-item-title" for="time_picker1_2">종료시간</label>
							<div class="input-item-box picker">
								<input type="text" id="time_picker1_2" name="time_picker1_2" class="input-item lg" title="종료시간 입력창" placeholder="HH:MM">
								<i class="picker-icon time-picker"></i>
							</div>
						</div>
					</div>
				</div>
				<div class="pe-form-box mt_25">
					<div class="pe-form-item w-350">
						<div class="input-item-wrap">
							<label class="input-item-title" for="time_picker2">단일</label>
							<div class="input-item-box picker">
								<input type="text" id="time_picker2" name="time_picker2" class="input-item lg" title="단일시간 입력창" placeholder="HH:MM">
								<i class="picker-icon time-picker"></i>
							</div>
						</div>
					</div>
				</div>`
  },
  "table": {
    id: "table",
    title: "표",
    code: `<table class="table table-bordered text-center" data-responsive="drop" data-breakpoint="" data-minwidth="" data-ratio="">
					<caption>000에 대한 표로 제목1,제목2에 대한 내용으로 구성되어 있으며 제목1은 제목1-1,제목1-2,제목1-3으로 구성되어있다.</caption>
					<colgroup>
						<col style="width: 30%;">
						<col>
					</colgroup>
					<thead>
						<tr>
						<th scope="col">제목1</th>
						<th scope="col">제목2</th>
						</tr>
					</thead>
					<tbody>
						<tr>
						<th scope="row">제목1-1</th>
						<td>내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. </td>
						</tr>
						<tr>
						<th scope="row">제목1-2</th>
						<td>내용이 들어갑니다.</td>
						</tr>
						<tr>
						<th scope="row">제목1-3</th>
						<td>내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. </td>
						</tr>
					</tbody>
				</table>`
  },
  "search": {
    id: "search",
    title: "검색",
    code: `<h2 class="h2">기본검색</h2>

					<!-- 검색 입력폼 -->
					<div class="search-top-box">
						<div class="sch-filter-box">
							<div class="search-top-head">
								<strong class="search-top-title">검색 필터</strong>
								<button type="button" class="search-top-close"><span class="skip">닫기</span></button>
							</div>
							<div class="filter-form-ground">
								<div class="filter-form">
									<div class="filter-form-line">
										<div class="filter-form-box">
											<div class="filter-form-item item-head w-60-s">
												<label for="select_1" class="item-title">권역분류</label>
												<button type="button" class="item-toggle"></button>
											</div>
											<div class="filter-form-item w-200-s item-body">
												<select id="select_1" name="select_1" class="pe-form-select medium" title="권역분류 선택창">
													<option value="전체">전체</option>
													<option value="권역분류1">권역분류1</option>
													<option value="권역분류2">권역분류2</option>
													<option value="권역분류3">권역분류3</option>
													<option value="권역분류4">권역분류4</option>
													<option value="권역분류5">권역분류5</option>
													<option value="권역분류6">권역분류6</option>
												</select>
											</div>
										</div>
										<div class="filter-form-box">
											<div class="filter-form-item item-head">
												<label for="select_2" class="item-title">권역분류</label>
												<button type="button" class="item-toggle"></button>
											</div>
											<div class="filter-form-item w-200-s item-body">
												<select id="select_2" name="select_2" class="pe-form-select medium" title="권역분류 선택창2">
													<option value="전체">전체</option>
													<option value="권역분류1">권역분류1</option>
													<option value="권역분류2">권역분류2</option>
													<option value="권역분류3">권역분류3</option>
													<option value="권역분류4">권역분류4</option>
													<option value="권역분류5">권역분류5</option>
													<option value="권역분류6">권역분류6</option>
												</select>
											</div>
										</div>
										<div class="filter-form-box">
											<div class="filter-form-item item-head w-60-s">
												<label for="select_3" class="item-title">권역분류</label>
												<button type="button" class="item-toggle"></button>
											</div>
											<div class="filter-form-item w-200-s item-body">
												<select id="select_3" name="select_3" class="pe-form-select medium" title="권역분류 선택창3">
													<option value="전체">전체</option>
													<option value="권역분류1">권역분류1</option>
													<option value="권역분류2">권역분류2</option>
													<option value="권역분류3">권역분류3</option>
													<option value="권역분류4">권역분류4</option>
													<option value="권역분류5">권역분류5</option>
													<option value="권역분류6">권역분류6</option>
												</select>
											</div>
										</div>
									</div>

									<div class="filter-form-line selectDate">
										<div class="filter-form-box">
											<div class="filter-form-item item-head w-60-s">
												<label for="select_4" class="item-title">교육기간</label>
												<button type="button" class="item-toggle"></button>
											</div>
											<div class="filter-form-item item-body">
												<div class="pe-form-box">
													<div class="pe-form-item dateSelector">
														<div class="input-item-wrap">
															<div class="input-item-box picker">
																<input type="text" id="date_picker3_1" name="date_picker3_1" class="input-item medium" title="시작날짜 입력창" placeholder="YYYY-MM-DD">
																<i class="picker-icon date-picker"></i>
															</div>
														</div>
													</div>
													<div class="pe-form-item">
														<span class="pe-form-text">~</span>
													</div>
													<div class="pe-form-item dateSelector">
														<div class="input-item-wrap">
															<div class="input-item-box picker">
																<input type="text" id="date_picker3_2" name="date_picker3_2" class="input-item medium" title="종료날짜 입력창" placeholder="YYYY-MM-DD">
																<i class="picker-icon date-picker"></i>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>

									<div class="filter-form-line">
										<div class="filter-form-box">
											<div class="filter-form-item item-head ih-noLabel w-60-s">
												<div class="item-title">이용기간</div>
											</div>
											<div class="filter-form-item w-600-s item-body">
												<span class="just-text">2026-01-27 ~ 2026-01-29(input이 없고 일반 텍스트가 들어가야 할 때 사용해주세요.)</span>
											</div>
										</div>
									</div>

									<div class="filter-form-line">
										<div class="filter-form-box">
											<div class="filter-form-item item-head w-60-s">
												<label for="input_search" class="item-title">관광지명</label>
												<button type="button" class="item-toggle"></button>
											</div>
											<div class="filter-form-item w-250-s item-body">
												<div class="input-item-wrap">
													<div class="input-item-box">
														<input type="text" id="input_search" name="input_search" class="input-item" title="관광지명 검색창" placeholder="관광지명을 입력해 주세요.">
													</div>
												</div>
											</div>
										</div>
										<div class="filter-form-box">
											<div class="filter-form-item">
												<div class="filter-btn-box">
													<button type="button" class="btn secondary medium"><i class="svg-icon ico-refresh" aria-hidden="true"></i>초기화</button>
													<button type="button" class="btn primary medium"><i class="svg-icon ico-search" aria-hidden="true"></i>검색하기</button>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="filter-chip">
									<strong class="chip-title">선택된 필터 <span class="num">4</span></strong>
									<div class="chip-content">
										<button type="button" class="btn xlarge icon border">
											<span class="sr-only">새로고침</span>
											<i class="svg-icon ico-refresh"></i>
										</button>
										<div class="chip-wrap pe-tag-wrap large">
											<span class="btn-tag">
												중앙부처 복지사업
												<button type="button" class="btn-delete">
													<span class="sr-only">삭제</span>
												</button>
											</span>
											<span class="btn-tag">
												임신출산
												<button type="button" class="btn-delete">
													<span class="sr-only">삭제</span>
												</button>
											</span>
											<span class="btn-tag">
												저소득
												<button type="button" class="btn-delete">
													<span class="sr-only">삭제</span>
												</button>
											</span>
											<span class="btn-tag">
												맞춤형급여안내
												<button type="button" class="btn-delete">
													<span class="sr-only">삭제</span>
												</button>
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- //검색 입력폼 -->

					<!-- 검색 결과 : 리스트 상단 -->
					<div class="search-list-top">
						<ul class="sch-info" aria-live="polite">
							<li>총 게시물 <span class="point">2</span>, 
								<span class="ui program--division-line">페이지 <strong class="text-point">1</strong> / 1</span> 
							</li>
						</ul>
						<div class="sch-wrap">
							<div class="sch-btn">
								<button type="button" class="btn neutral medium outline-none"><i class="svg-icon ico-download" aria-hidden="true"></i>핵심버튼</button>
								<button type="button" class="btn neutral medium outline-none"><i class="svg-icon ico-download" aria-hidden="true"></i>핵심버튼</button>
								<button type="button" class="btn neutral medium outline-none"><i class="svg-icon ico-download" aria-hidden="true"></i>핵심버튼</button>
							</div>
							<ul class="sch-sort">
								<li class="m-hide">
									<strong class="sort-label"><label for="search_result_count">목록 표시 개수</label></strong>
									<select class="pe-form-select-sort" id="search_result_count" title="목록 표시 선택">
										<option>12개</option>
										<option>9개</option>
									</select>
									<button type="button" class="fe-btn btn-pagingSelect button_search" title="Apply">적용</button>
								</li>
								<li class="w-hide">
									<button type="button" class="btn large text ico-filter open-modal" data-target="popFilterId">
										<span class="span">필터</span>
										<span class="pe-badge bg primary number">2</span>
										<i class="svg-icon ico-filter"></i>
									</button>
								</li>
								<li>
									<strong class="sort-label"><label for="sort">정렬기준</label></strong>
									<div class="w-sort-btn">
										<button type="button" class="active">관련도순</button>
										<button type="button">최신순</button>
										<button type="button">인기순</button>
									</div>
									<div class="m-sort-btn">
										<select class="pe-form-select-sort" id="sort">
											<option>관련도순</option>
											<option>최신순</option>
											<option>인기순</option>
										</select>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<!-- //검색 결과 : 리스트 상단 -->

					<!-- 검색 결과 : 리스트 -->
					<ul class="pe-structured-list">
						<li class="structured-item">
							<div class="in">
							<div class="card-top">
								<span class="pe-badge bg-light primary">뱃지</span>
								</div>
								<div class="card-body">
								<div class="c-text">
									<p class="c-tit"><span class="span">타이틀 영역</span></p>
									<p class="c-txt">
									간단한 설명이 들어가는 영역입니다. 최대 3줄까지 작성합니다. 간단한 설명이 들어가는 영역입니다. 간단한 설명이 들어가는 영역입니다.
									</p>
									<p class="c-date">
									<strong class="key">신청 기간</strong>
									<span class="value">2023.00.00-2024.00.00</span>
									</p>
								</div>
								<div class="c-btn">
									<a href="#" class="btn primary medium" title="타이틀 영역">신청하기</a>
								</div>
								</div>
								<div class="card-btm">
								<span class="tag">태그</span>
								<span class="tag">태그</span>
								</div>
								<div class="card-btn">
								<button type="button" class="btn md text" title="타이틀 영역"><i class="svg-icon ico-share"></i> 공유하기</button>
								<button type="button" class="btn md text" title="타이틀 영역"><i class="svg-icon ico-like"></i> 찜하기</button>
								</div>
							</div>
						</li>
						<li class="structured-item">
							<div class="in">
								<div class="card-top">
								<span class="pe-badge bg-light success">뱃지</span>
								</div>
								<div class="card-body">
								<div class="c-text">
									<p class="c-tit"><span class="span">타이틀 영역</span></p>
									<p class="c-txt">
									간단한 설명이 들어가는 영역입니다. 최대 3줄까지 작성합니다. 간단한 설명이 들어가는 영역입니다. 간단한 설명이 들어가는 영역입니다.
									</p>
									<p class="c-date">
									<strong class="key">신청 기간</strong>
									<span class="value">2023.00.00-2024.00.00</span>
									</p>
								</div>
								<div class="c-btn">
									<a href="#" class="btn primary medium" title="타이틀 영역">신청하기</a>
								</div>
								</div>
								<div class="card-btm">
								<span class="tag">태그</span>
								<span class="tag">태그</span>
								</div>
								<div class="card-btn">
								<button type="button" class="btn md text" title="타이틀 영역"><i class="svg-icon ico-share"></i> 공유하기</button>
								<button type="button" class="btn md text" title="타이틀 영역"><i class="svg-icon ico-like"></i> 찜하기</button>
								</div>
							</div>
						</li>
						<li class="structured-item">
							<div class="in">
							<div class="card-top">
								<span class="pe-badge bg secondary">뱃지</span>
								</div>
								<div class="card-body">
								<div class="c-text">
									<p class="c-tit"><span class="span">타이틀 영역</span></p>
									<p class="c-txt">
									간단한 설명이 들어가는 영역입니다. 최대 3줄까지 작성합니다. 간단한 설명이 들어가는 영역입니다. 간단한 설명이 들어가는 영역입니다.
									</p>
									<p class="c-date">
									<strong class="key">신청 기간</strong>
									<span class="value">2023.00.00-2024.00.00</span>
									</p>
								</div>
								<div class="c-btn">
									<a href="#" class="btn primary medium" title="타이틀 영역">신청하기</a>
								</div>
								</div>
								<div class="card-btm">
								<span class="tag">태그</span>
								<span class="tag">태그</span>
								</div>
								<div class="card-btn">
								<button type="button" class="btn md text" title="타이틀 영역"><i class="svg-icon ico-share"></i> 공유하기</button>
								<button type="button" class="btn md text" title="타이틀 영역"><i class="svg-icon ico-like"></i> 찜하기</button>
								</div>
							</div>
						</li>
					</ul>	
					<!-- //검색 결과 : 리스트 -->

					<!-- 페이지네이션 영역 -->
					<div class="pe-pagination">
						<span class="page-navi prev disabled" href="#">이전</span>
						<div class="page-links">
							<a class="page-link" href="#">1</a>
							<a class="page-link" href="#">2</a>
							<a class="page-link" href="#">3</a>
							<a class="page-link active" href="#">4</a>
							<a class="page-link" href="#">5</a>
							<a class="page-link" href="#">6</a>
							<a class="page-link" href="#">7</a>
							<a class="page-link" href="#">8</a>
							<span class="page-link link-dot"></span>
							<a class="page-link" href="#">99</a>
						</div>
						<a class="page-navi next" href="#">다음</a>
					</div>
					<!-- //페이지네이션 영역 -->
			


					<h2 class="h2">상세검색</h2>
					
					<!-- 검색 입력폼 -->
					<div class="search-top-box detail-type">
						<div class="sch-filter-box">
							<div class="search-top-head">
								<strong class="search-top-title">검색 필터</strong>
								<button type="button" class="search-top-close"><span class="skip">닫기</span></button>
							</div>
							<div class="filter-form-ground">
								<div class="filter-form">
									<div class="filter-form-line">
										<div class="filter-form-box">
											<div class="filter-form-item item-head">
												<label for="input_search" class="item-title">관광지명</label>
												<button type="button" class="item-toggle"></button>
											</div>
											<div class="filter-form-item w-360-s item-body">
												<div class="input-item-wrap">
													<div class="input-item-box">
														<input type="text" id="input_search" name="input_search" class="input-item" title="관광지명 검색창" placeholder="관광지명어을 입력해 주세요.">
													</div>
												</div>
											</div>
										</div>
										<div class="filter-form-box detail-hide">
											<div class="filter-form-item">
												<div class="filter-btn-box">
													<button type="button" class="btn secondary medium"><i class="svg-icon ico-refresh" aria-hidden="true"></i>초기화</button>
													<button type="button" class="btn primary medium"><i class="svg-icon ico-search" aria-hidden="true"></i>검색하기</button>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="filter-form detail-form">
									<div class="filter-form-line">
										<div class="filter-form-box">
											<div class="filter-form-item item-head">
												<strong class="item-title">권역분류</strong>
												<button type="button" class="item-toggle"></button>
											</div>
											<div class="filter-form-item item-body">
												<div class="pe-check-area">
													<div class="pe-form-check">
														<input type="radio" name="rdo_1" id="rdo_1" title="권역분류 다목적실 선택">
														<label for="rdo_1">다목적실</label>
													</div>
													<div class="pe-form-check">
														<input type="radio" name="rdo_1" id="rdo_2" title="권역분류 회의실 및 모임실 선택" checked="">
														<label for="rdo_2">회의실 및 모임실</label>
													</div>
													<div class="pe-form-check">
														<input type="radio" name="rdo_1" id="rdo_3" title="권역분류 연습실 선택" checked="">
														<label for="rdo_3">연습실</label>
													</div>
													<div class="pe-form-check">
														<input type="radio" name="rdo_1" id="rdo_4" title="권역분류 세미나실 선택" checked="">
														<label for="rdo_4">세미나실</label>
													</div>
													<div class="pe-form-check">
														<input type="radio" name="rdo_1" id="rdo_5" title="권역분류 작업실 선택" checked="">
														<label for="rdo_5">작업실</label>
													</div>
													<div class="pe-form-check">
														<input type="radio" name="rdo_1" id="rdo_6" title="권역분류 공연장 선택" checked="">
														<label for="rdo_6">공연장</label>
													</div>
													<div class="pe-form-check">
														<input type="radio" name="rdo_1" id="rdo_7" title="권역분류 기타 선택" checked="">
														<label for="rdo_7">기타</label>
													</div>
												</div>
											</div>
										</div>
									</div>

									<div class="filter-form-line">
										<div class="filter-form-box">
											<div class="filter-form-item item-head">
												<label for="select_popul" class="item-title">수용인원</label>
												<button type="button" class="item-toggle"></button>
											</div>
											<div class="filter-form-item item-body">
												<div class="pe-form-box">
													<div class="pe-form-item w-120">
														<select id="select_popul" name="select_popul" class="pe-form-select medium" title="수용인원 선택창">
															<option value="전체">전체</option>
															<option value="5">5</option>
															<option value="10">10</option>
															<option value="15">15</option>
															<option value="20">20</option>
														</select>
													</div>
													<div class="pe-form-item">
														<span class="pe-form-text">명</span>
													</div>
												</div>
											</div>
										</div>
										<div class="filter-form-box">
											<div class="filter-form-item item-head">
												<strong class="item-title">주차여부</strong>
												<button type="button" class="item-toggle"></button>
											</div>
											<div class="filter-form-item item-body">
												<div class="pe-check-area">
													<div class="pe-form-check">
														<input type="checkbox" id="chk_1" title="주차여부 주차가능 선택">
														<label for="chk_1">주차가능</label>
													</div>
													<div class="pe-form-check">
														<input type="checkbox" id="chk_2" title="주차여부 주차불가 선택">
														<label for="chk_2">주차불가</label>
													</div>
												</div>
											</div>
										</div>
										<div class="filter-form-box">
											<div class="filter-form-item item-head">
												<strong class="item-title">장애인시설여부</strong>
												<button type="button" class="item-toggle"></button>
											</div>
											<div class="filter-form-item item-body">
												<div class="pe-check-area">
													<div class="pe-form-check">
														<input type="checkbox" id="chk_3" title="장애인시설여부 있음 선택">
														<label for="chk_3">있음</label>
													</div>
													<div class="pe-form-check">
														<input type="checkbox" id="chk_4" title="장애인시설여부 없음 선택">
														<label for="chk_4">없음</label>
													</div>
												</div>
											</div>
										</div>
										<div class="filter-form-box">
											<div class="filter-form-item item-head">
												<strong class="item-title">개방시간</strong>
												<button type="button" class="item-toggle"></button>
											</div>
											<div class="filter-form-item item-body">
												<div class="pe-form-box gap-8" data-type="timeRangePicker" data-start=".start-time" data-end=".end-time" data-interval="30" data-min-time="08:00" data-max-time="23:00">
													<div class="pe-form-item w-170">
														<div class="input-item-wrap">
															<div class="input-item-box picker">
																<input type="text" id="time_picker1_1" class="input-item start-time" placeholder="HH:MM" readonly="" title="시작시간 입력창">
																<i class="picker-icon time-picker"></i>
															</div>
														</div>
													</div>
													<div class="pe-form-item">
														<span class="pe-form-text">~</span>
													</div>
													<div class="pe-form-item w-170">
														<div class="input-item-wrap">
															<div class="input-item-box picker">
																<input type="text" id="time_picker1_2" class="input-item end-time" placeholder="HH:MM" readonly="" title="종료시간 입력창">
																<i class="picker-icon time-picker"></i>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>

									<div class="filter-form-line">
										<div class="filter-form-box">
											<div class="filter-form-item item-head">
												<strong class="item-title">개방날짜</strong>
												<button type="button" class="item-toggle"></button>
											</div>
											<div class="filter-form-item item-body">
												<div class="pe-check-area">
													<div class="pe-form-check">
														<input type="checkbox" id="chk_00" title="개방날짜 월요일 선택">
														<label for="chk_00">월요일</label>
													</div>
													<div class="pe-form-check">
														<input type="checkbox" id="chk_01" title="개방날짜 화요일 선택">
														<label for="chk_01">화요일</label>
													</div>
													<div class="pe-form-check">
														<input type="checkbox" id="chk_02" title="개방날짜 수요일 선택">
														<label for="chk_02">수요일</label>
													</div>
													<div class="pe-form-check">
														<input type="checkbox" id="chk_03" title="개방날짜 목요일 선택">
														<label for="chk_03">목요일</label>
													</div>
													<div class="pe-form-check">
														<input type="checkbox" id="chk_04" title="개방날짜 금요일 선택">
														<label for="chk_04">금요일</label>
													</div>
													<div class="pe-form-check">
														<input type="checkbox" id="chk_05" title="개방날짜 토요일 선택">
														<label for="chk_05">토요일</label>
													</div>
													<div class="pe-form-check">
														<input type="checkbox" id="chk_06" title="개방날짜 일요일 선택">
														<label for="chk_06">일요일</label>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="filter-form detail-show">
									<div class="filter-form-line">
										<div class="filter-form-box">
											<div class="filter-form-item">
												<div class="filter-btn-box">
													<button type="button" class="btn primary medium"><i class="svg-icon ico-search" aria-hidden="true"></i>검색하기</button>
													<button type="button" class="btn tertiary medium"><i class="svg-icon ico-refresh" aria-hidden="true"></i>초기화</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="detail-toggle">
							<button class="sch-filter-btn btn secondary medium xlarge open-detail show"><i class="svg-icon ico-down" aria-hidden="true"></i>상세검색 펼치기</button>
							<button class="sch-filter-btn btn secondary medium xlarge close-detail"><i class="svg-icon ico-down" aria-hidden="true"></i>상세검색 닫기</button>
						</div>
					</div>
					<!-- //검색 입력폼 -->

					<!-- 검색 결과 : 리스트 상단 -->
					<div class="search-list-top">
						<ul class="sch-info" aria-live="polite">
							<li>총 게시물 <span class="point">2</span>, 
								<span class="ui program--division-line">페이지 <strong class="text-point">1</strong> / 1</span> 
							</li>
						</ul>
						<div class="sch-wrap">
							<ul class="sch-sort">
								<li class="m-hide">
									<strong class="sort-label"><label for="search_result_count">목록 표시 개수</label></strong>
									<select class="pe-form-select-sort" id="search_result_count">
										<option>12개</option>
										<option>9개</option>
									</select>
									<button type="button" class="fe-btn btn-pagingSelect button_search" title="Apply">적용</button>
								</li>
								<li class="w-hide">
									<button type="button" class="btn large text ico-filter open-modal" data-target="popFilterId">
										<span class="span">필터</span>
										<span class="pe-badge bg primary number">2</span>
										<i class="svg-icon ico-filter"></i>
									</button>
								</li>
								<li>
									<strong class="sort-label"><label for="sort">정렬기준</label></strong>
									<div class="w-sort-btn">
										<button type="button" class="active">관련도순</button>
										<button type="button">최신순</button>
										<button type="button">인기순</button>
									</div>
									<div class="m-sort-btn">
										<select class="pe-form-select-sort" id="sort">
											<option>관련도순</option>
											<option>최신순</option>
											<option>인기순</option>
										</select>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<!-- //검색 결과 : 리스트 상단 -->

					<!-- 검색 결과 : 리스트 -->
					<ul class="pe-structured-list">
						<li class="structured-item">
							<div class="in">
							<div class="card-top">
								<span class="pe-badge bg-light primary">뱃지</span>
								</div>
								<div class="card-body">
								<div class="c-text">
									<p class="c-tit"><span class="span">타이틀 영역</span></p>
									<p class="c-txt">
									간단한 설명이 들어가는 영역입니다. 최대 3줄까지 작성합니다. 간단한 설명이 들어가는 영역입니다. 간단한 설명이 들어가는 영역입니다.
									</p>
									<p class="c-date">
									<strong class="key">신청 기간</strong>
									<span class="value">2023.00.00-2024.00.00</span>
									</p>
								</div>
								<div class="c-btn">
									<a href="#" class="btn primary medium" title="타이틀 영역">신청하기</a>
								</div>
								</div>
								<div class="card-btm">
								<span class="tag">태그</span>
								<span class="tag">태그</span>
								</div>
								<div class="card-btn">
								<button type="button" class="btn md text" title="타이틀 영역"><i class="svg-icon ico-share"></i> 공유하기</button>
								<button type="button" class="btn md text" title="타이틀 영역"><i class="svg-icon ico-like"></i> 찜하기</button>
								</div>
							</div>
						</li>
						<li class="structured-item">
							<div class="in">
								<div class="card-top">
								<span class="pe-badge bg-light success">뱃지</span>
								</div>
								<div class="card-body">
								<div class="c-text">
									<p class="c-tit"><span class="span">타이틀 영역</span></p>
									<p class="c-txt">
									간단한 설명이 들어가는 영역입니다. 최대 3줄까지 작성합니다. 간단한 설명이 들어가는 영역입니다. 간단한 설명이 들어가는 영역입니다.
									</p>
									<p class="c-date">
									<strong class="key">신청 기간</strong>
									<span class="value">2023.00.00-2024.00.00</span>
									</p>
								</div>
								<div class="c-btn">
									<a href="#" class="btn primary medium" title="타이틀 영역">신청하기</a>
								</div>
								</div>
								<div class="card-btm">
								<span class="tag">태그</span>
								<span class="tag">태그</span>
								</div>
								<div class="card-btn">
								<button type="button" class="btn md text" title="타이틀 영역"><i class="svg-icon ico-share"></i> 공유하기</button>
								<button type="button" class="btn md text" title="타이틀 영역"><i class="svg-icon ico-like"></i> 찜하기</button>
								</div>
							</div>
						</li>
						<li class="structured-item">
							<div class="in">
							<div class="card-top">
								<span class="pe-badge bg secondary">뱃지</span>
								</div>
								<div class="card-body">
								<div class="c-text">
									<p class="c-tit"><span class="span">타이틀 영역</span></p>
									<p class="c-txt">
									간단한 설명이 들어가는 영역입니다. 최대 3줄까지 작성합니다. 간단한 설명이 들어가는 영역입니다. 간단한 설명이 들어가는 영역입니다.
									</p>
									<p class="c-date">
									<strong class="key">신청 기간</strong>
									<span class="value">2023.00.00-2024.00.00</span>
									</p>
								</div>
								<div class="c-btn">
									<a href="#" class="btn primary medium" title="타이틀 영역">신청하기</a>
								</div>
								</div>
								<div class="card-btm">
								<span class="tag">태그</span>
								<span class="tag">태그</span>
								</div>
								<div class="card-btn">
								<button type="button" class="btn md text" title="타이틀 영역"><i class="svg-icon ico-share"></i> 공유하기</button>
								<button type="button" class="btn md text" title="타이틀 영역"><i class="svg-icon ico-like"></i> 찜하기</button>
								</div>
							</div>
						</li>
					</ul>	
					<!-- //검색 결과 : 리스트 -->

					<!-- 페이지네이션 영역 -->
					<div class="pe-pagination">
						<span class="page-navi prev disabled" href="#">이전</span>
						<div class="page-links">
							<a class="page-link" href="#">1</a>
							<a class="page-link" href="#">2</a>
							<a class="page-link" href="#">3</a>
							<a class="page-link active" href="#">4</a>
							<a class="page-link" href="#">5</a>
							<a class="page-link" href="#">6</a>
							<a class="page-link" href="#">7</a>
							<a class="page-link" href="#">8</a>
							<span class="page-link link-dot"></span>
							<a class="page-link" href="#">99</a>
						</div>
						<a class="page-navi next" href="#">다음</a>
					</div>
					<!-- //페이지네이션 영역 -->`
  },
  "proglist": {
    id: "proglist",
    title: "프로그램 리스트 (전체링크)",
    code: `<!-- 검색 입력폼 -->
				<div class="top-search-input">
					<div class="input-item-wrap">
						<div class="input-item-box">
							<input type="text" id="input1_1" name="input1_1" class="input-item lg" title="검색창." placeholder="검색어를 입력해 주세요.">
							<button type="button" class="top-search-btn"><span class="skip">검색</span></button>
						</div>
					</div>
					<div class="advanced-search">
						<button type="button" class="advanced-toggle" title="고급검색 열기">고급검색</button>
					</div>
				</div>

				<div class="advanced-search-box">
					<div class="search-top-box">
						<div class="sch-filter-box">
							<div class="search-top-head">
								<strong class="search-top-title">검색 필터</strong>
								<button type="button" class="search-top-close"><span class="skip">닫기</span></button>
							</div>
							<div class="filter-form-ground">
								<div class="filter-form">
									<div class="filter-form-line">
										<div class="filter-form-box">
											<div class="filter-form-item item-head">
												<label for="select_1" class="item-title">권역분류</label>
												<button type="button" class="item-toggle"></button>
											</div>
											<div class="filter-form-item w-200-s item-body">
												<select id="select_1" name="select_1" class="pe-form-select medium" title="권역분류 선택창">
													<option value="전체">전체</option>
													<option value="권역분류1">권역분류1</option>
													<option value="권역분류2">권역분류2</option>
													<option value="권역분류3">권역분류3</option>
													<option value="권역분류4">권역분류4</option>
													<option value="권역분류5">권역분류5</option>
													<option value="권역분류6">권역분류6</option>
												</select>
											</div>
										</div>
										<div class="filter-form-box">
											<div class="filter-form-item item-head">
												<label for="select_2" class="item-title">권역분류</label>
												<button type="button" class="item-toggle"></button>
											</div>
											<div class="filter-form-item w-200-s item-body">
												<select id="select_2" name="select_2" class="pe-form-select medium" title="권역분류 선택창2">
													<option value="전체">전체</option>
													<option value="권역분류1">권역분류1</option>
													<option value="권역분류2">권역분류2</option>
													<option value="권역분류3">권역분류3</option>
													<option value="권역분류4">권역분류4</option>
													<option value="권역분류5">권역분류5</option>
													<option value="권역분류6">권역분류6</option>
												</select>
											</div>
										</div>
										<div class="filter-form-box">
											<div class="filter-form-item item-head">
												<label for="select_3" class="item-title">권역분류</label>
												<button type="button" class="item-toggle"></button>
											</div>
											<div class="filter-form-item w-200-s item-body">
												<select id="select_3" name="select_3" class="pe-form-select medium" title="권역분류 선택창3">
													<option value="전체">전체</option>
													<option value="권역분류1">권역분류1</option>
													<option value="권역분류2">권역분류2</option>
													<option value="권역분류3">권역분류3</option>
													<option value="권역분류4">권역분류4</option>
													<option value="권역분류5">권역분류5</option>
													<option value="권역분류6">권역분류6</option>
												</select>
											</div>
										</div>
									</div>
								</div>
								<div class="filter-chip">
									<strong class="chip-title">선택된 필터 <span class="num">4</span></strong>
									<div class="chip-content">
										<button type="button" class="btn xlarge icon border">
											<span class="sr-only">새로고침</span>
											<i class="svg-icon ico-refresh"></i>
										</button>
										<div class="chip-wrap pe-tag-wrap large">
											<span class="btn-tag">
												중앙부처 복지사업
												<button type="button" class="btn-delete">
													<span class="sr-only">삭제</span>
												</button>
											</span>
											<span class="btn-tag">
												임신출산
												<button type="button" class="btn-delete">
													<span class="sr-only">삭제</span>
												</button>
											</span>
											<span class="btn-tag">
												저소득
												<button type="button" class="btn-delete">
													<span class="sr-only">삭제</span>
												</button>
											</span>
											<span class="btn-tag">
												맞춤형급여안내
												<button type="button" class="btn-delete">
													<span class="sr-only">삭제</span>
												</button>
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- //검색 입력폼 -->
				
				<!-- 검색 결과 : 리스트 상단 -->
				<div class="search-list-top">
					<ul class="sch-info" aria-live="polite">
						<li>총 게시물 <span class="point">2</span>, 
							<span class="ui program--division-line">페이지 <strong class="text-point">1</strong> / 1</span> 
						</li>
					</ul>
					<div class="sch-wrap">
						<div class="sch-btn">
							<button type="button" class="btn neutral medium medium outline-none"><i class="svg-icon ico-download" aria-hidden="true"></i>핵심버튼</button>
							<button type="button" class="btn neutral medium medium outline-none"><i class="svg-icon ico-download" aria-hidden="true"></i>핵심버튼</button>
							<button type="button" class="btn neutral medium medium outline-none"><i class="svg-icon ico-download" aria-hidden="true"></i>핵심버튼</button>
						</div>
						<ul class="sch-sort">
							<li class="m-hide">
								<strong class="sort-label"><label for="search_result_count">목록 표시 개수</label></strong>
								<select class="pe-form-select-sort" id="search_result_count">
									<option>12개</option>
									<option>9개</option>
								</select>
								<button type="button" class="fe-btn btn-pagingSelect button_search" title="Apply">적용</button>
							</li>
							<li class="w-hide">
								<button type="button" class="btn large text ico-filter open-modal" data-target="popFilterId">
									<span class="span">필터</span>
									<span class="pe-badge bg primary number">2</span>
									<i class="svg-icon ico-filter"></i>
								</button>
							</li>
							<li>
								<strong class="sort-label"><label for="sort">정렬기준</label></strong>
								<div class="w-sort-btn">
									<button type="button" class="active">관련도순</button>
									<button type="button">최신순</button>
									<button type="button">인기순</button>
								</div>
								<div class="m-sort-btn">
									<select class="pe-form-select-sort" id="sort">
										<option>관련도순</option>
										<option>최신순</option>
										<option>인기순</option>
									</select>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<!-- //검색 결과 : 리스트 상단 -->
								
				<ul class="pe-structured-list allLinktype">
                    <li class="structured-item">
                        <a href="" class="structured-item-link">
                            <div class="card-img">
                                <img src="/assets/styleguide/img/bodo-v.jpg" alt="">
                            </div>
                            <div class="in">
                                <div class="card-top">
                                    <span class="pe-badge bg-light primary">뱃지</span>
                                </div>
                                <div class="card-body">
                                    <div class="c-text">
                                        <p class="c-tit"><span class="span">타이틀 영역</span></p>
                                        <p class="c-txt">
                                            간단한 설명이 들어가는 영역입니다. 최대 3줄까지 작성합니다. 간단한 설명이 들어가는 영역입니다. 간단한 설명이 들어가는 영역입니다.
                                        </p>
										<ul class="c-info-list pl-130">
											<li> 
												<strong class="subjact">신청시간</strong> 
												<span class="con">2023.00.00-2024.00.00</span>
											</li>
											<li> 
												<strong class="subjact">신청시간</strong> 
												<span class="con">2023.00.00-2024.00.00</span>
											</li>
											<li> 
												<strong class="subjact">신청시간</strong> 
												<span class="con">2023.00.00-2024.00.00</span>
											</li>
											<li> 
												<strong class="subjact">신청시간</strong> 
												<span class="con">2023.00.00-2024.00.00</span>
											</li>
										</ul>
                                    </div>
                                </div>
                                <div class="card-btm">
                                    <span class="tag">태그</span>
                                    <span class="tag">태그</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="structured-item">
                        <a href="" class="structured-item-link">
                            <div class="card-img">
                                <img src="/assets/styleguide/img/bodo-v.jpg" alt="">
                            </div>
                            <div class="in">
                                <div class="card-top">
                                    <span class="pe-badge bg-light success">뱃지</span>
                                </div>
                                <div class="card-body">
                                    <div class="c-text">
                                        <p class="c-tit"><span class="span">타이틀 영역</span></p>
                                        <p class="c-txt">
                                            간단한 설명이 들어가는 영역입니다. 최대 3줄까지 작성합니다. 간단한 설명이 들어가는 영역입니다. 간단한 설명이 들어가는 영역입니다.
                                        </p>
										<ul class="c-info-list">
											<li> 
												<strong class="subjact">신청시간</strong> 
												<span class="con">2023.00.00-2024.00.00</span>
											</li>
											<li> 
												<strong class="subjact">신청시간</strong> 
												<span class="con">2023.00.00-2024.00.00</span>
											</li>
											<li> 
												<strong class="subjact">신청시간</strong> 
												<span class="con">2023.00.00-2024.00.00</span>
											</li>
										</ul>
                                    </div>
                                </div>
                                <div class="card-btm">
                                    <span class="tag">태그</span>
                                    <span class="tag">태그</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="structured-item">
                        <a href="" class="structured-item-link">
                            <div class="card-img">
                                <img src="/assets/styleguide/img/bodo-v.jpg" alt="">
                            </div>
                            <div class="in">
                                <div class="card-top">
                                    <span class="pe-badge bg secondary">뱃지</span>
                                </div>
                                <div class="card-body">
                                    <div class="c-text">
										<p class="c-tit"><span class="span">타이틀 영역</span></p>
										<p class="c-txt">
											간단한 설명이 들어가는 영역입니다. 최대 3줄까지 작성합니다. 간단한 설명이 들어가는 영역입니다. 간단한 설명이 들어가는 영역입니다.
										</p>
										<ul class="c-info-list">
											<li> 
												<strong class="subjact">신청시간</strong> 
												<span class="con">2023.00.00-2024.00.00</span>
											</li>
										</ul>
										<ul class="c-meta">
											<li>Metadata</li>
											<li>Metadata</li>
											<li>Metadata</li>
											<li>Metadata</li>
											<li>Metadata</li>
											<li>Metadata</li>
											<li>Metadata</li>
											<li>Metadata</li>
											<li>Metadata</li>
											<li>Metadata</li>
										</ul>
                                    </div>
                                </div>
                                <div class="card-btm">
                                    <span class="tag">태그</span>
                                    <span class="tag">태그</span>
                                </div>
                            </div>
                        </a>
                    </li>
				</ul>
				
                <ul class="pe-structured-list type-full allLinktype">
                    <li class="structured-item">
                        <a href="#" class="structured-item-link">
                            <div class="card-img">
                                <img src="/assets/styleguide/img/bodo-v.jpg" alt="">
                            </div>
                            <div class="in">
                                <div class="card-top">
                                    <span class="pe-badge bg-light primary">뱃지</span>
                                </div>
                                <div class="card-body">
                                    <div class="c-text">
                                        <p class="c-tit"><span class="span">타이틀 영역</span></p>
                                        <p class="c-txt">
                                            간단한 설명이 들어가는 영역입니다. 최대 3줄까지 작성합니다. 간단한 설명이 들어가는 영역입니다. 간단한 설명이 들어가는 영역입니다.
                                        </p>
										<ul class="c-info-list">
											<li> 
												<strong class="subjact">신청시간</strong> 
												<span class="con">2023.00.00-2024.00.00</span>
											</li>
											<li> 
												<strong class="subjact">신청시간</strong> 
												<span class="con">2023.00.00-2024.00.00</span>
											</li>
											<li> 
												<strong class="subjact">신청시간</strong> 
												<span class="con">2023.00.00-2024.00.00</span>
											</li>
										</ul>
                                    </div>
                                </div>
                                <div class="card-btm">
                                    <span class="tag">태그</span>
                                    <span class="tag">태그</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="structured-item">
                        <a href="#" class="structured-item-link">
                            <div class="card-img">
                                <img src="/assets/styleguide/img/bodo-v.jpg" alt="">
                            </div>
                            <div class="in">
                                <div class="card-top">
                                    <span class="pe-badge bg-light success">뱃지</span>
                                </div>
                                <div class="card-body">
                                    <div class="c-text">
                                        <p class="c-tit"><span class="span">타이틀 영역</span></p>
                                        <p class="c-txt">
                                            간단한 설명이 들어가는 영역입니다. 최대 3줄까지 작성합니다. 간단한 설명이 들어가는 영역입니다. 간단한 설명이 들어가는 영역입니다.
                                        </p>
										<ul class="c-info-list">
											<li> 
												<strong class="subjact">신청시간</strong> 
												<span class="con">2023.00.00-2024.00.00</span>
											</li>
											<li> 
												<strong class="subjact">신청시간</strong> 
												<span class="con">2023.00.00-2024.00.00</span>
											</li>
											<li> 
												<strong class="subjact">신청시간</strong> 
												<span class="con">2023.00.00-2024.00.00</span>
											</li>
										</ul>
                                    </div>
                                </div>
                                <div class="card-btm">
                                    <span class="tag">태그</span>
                                    <span class="tag">태그</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="structured-item">
                        <a href="#" class="structured-item-link">
                            <div class="card-img">
                                <img src="/assets/styleguide/img/bodo-v.jpg" alt="">
                            </div>
                            <div class="in">
                                <div class="card-top">
                                    <span class="pe-badge bg secondary">뱃지</span>
                                </div>
                                <div class="card-body">
                                    <div class="c-text">
                                        <p class="c-tit"><span class="span">타이틀 영역</span></p>
                                        <p class="c-txt">
                                            간단한 설명이 들어가는 영역입니다. 최대 3줄까지 작성합니다. 간단한 설명이 들어가는 영역입니다. 간단한 설명이 들어가는 영역입니다.
                                        </p>
										<ul class="c-info-list">
											<li> 
												<strong class="subjact">신청시간</strong> 
												<span class="con">2023.00.00-2024.00.00</span>
											</li>
											<li> 
												<strong class="subjact">신청시간</strong> 
												<span class="con">2023.00.00-2024.00.00</span>
											</li>
											<li> 
												<strong class="subjact">신청시간</strong> 
												<span class="con">2023.00.00-2024.00.00</span>
											</li>
										</ul>
                                    </div>
                                </div>
                                <div class="card-btm">
                                    <span class="tag">태그</span>
                                    <span class="tag">태그</span>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
				
				<!-- 페이지네이션 영역 -->
				<div class="pe-pagination">
					<span class="page-navi prev disabled" href="#">이전</span>
					<div class="page-links">
						<a class="page-link" href="#">1</a>
						<a class="page-link" href="#">2</a>
						<a class="page-link" href="#">3</a>
						<a class="page-link active" href="#">4</a>
						<a class="page-link" href="#">5</a>
						<a class="page-link" href="#">6</a>
						<a class="page-link" href="#">7</a>
						<a class="page-link" href="#">8</a>
						<span class="page-link link-dot"></span>
						<a class="page-link" href="#">99</a>
					</div>
					<a class="page-navi next" href="#">다음</a>
				</div>
				<!-- //페이지네이션 영역 -->`
  },
  "proglist2": {
    id: "proglist2",
    title: "프로그램 리스트 (버튼형)",
    code: `<!-- 검색 입력폼 -->
				<div class="top-search-input">
					<div class="input-item-wrap">
						<div class="input-item-box">
							<input type="text" id="input1_1" name="input1_1" class="input-item lg" title="검색창." placeholder="검색어를 입력해 주세요.">
							<button type="button" class="top-search-btn"><span class="skip">검색</span></button>
						</div>
					</div>
					<div class="advanced-search">
						<button type="button" class="advanced-toggle" title="고급검색 열기">고급검색</button>
					</div>
				</div>

				<div class="advanced-search-box">
					<div class="search-top-box">
						<div class="sch-filter-box">
							<div class="search-top-head">
								<strong class="search-top-title">검색 필터</strong>
								<button type="button" class="search-top-close"><span class="skip">닫기</span></button>
							</div>
							<div class="filter-form-ground">
								<div class="filter-form">
									<div class="filter-form-line">
										<div class="filter-form-box">
											<div class="filter-form-item item-head">
												<label for="select_1" class="item-title">권역분류</label>
												<button type="button" class="item-toggle"></button>
											</div>
											<div class="filter-form-item w-200-s item-body">
												<select id="select_1" name="select_1" class="pe-form-select medium" title="권역분류 선택창">
													<option value="전체">전체</option>
													<option value="권역분류1">권역분류1</option>
													<option value="권역분류2">권역분류2</option>
													<option value="권역분류3">권역분류3</option>
													<option value="권역분류4">권역분류4</option>
													<option value="권역분류5">권역분류5</option>
													<option value="권역분류6">권역분류6</option>
												</select>
											</div>
										</div>
										<div class="filter-form-box">
											<div class="filter-form-item item-head">
												<label for="select_2" class="item-title">권역분류</label>
												<button type="button" class="item-toggle"></button>
											</div>
											<div class="filter-form-item w-200-s item-body">
												<select id="select_2" name="select_2" class="pe-form-select medium" title="권역분류 선택창2">
													<option value="전체">전체</option>
													<option value="권역분류1">권역분류1</option>
													<option value="권역분류2">권역분류2</option>
													<option value="권역분류3">권역분류3</option>
													<option value="권역분류4">권역분류4</option>
													<option value="권역분류5">권역분류5</option>
													<option value="권역분류6">권역분류6</option>
												</select>
											</div>
										</div>
										<div class="filter-form-box">
											<div class="filter-form-item item-head">
												<label for="select_3" class="item-title">권역분류</label>
												<button type="button" class="item-toggle"></button>
											</div>
											<div class="filter-form-item w-200-s item-body">
												<select id="select_3" name="select_3" class="pe-form-select medium" title="권역분류 선택창3">
													<option value="전체">전체</option>
													<option value="권역분류1">권역분류1</option>
													<option value="권역분류2">권역분류2</option>
													<option value="권역분류3">권역분류3</option>
													<option value="권역분류4">권역분류4</option>
													<option value="권역분류5">권역분류5</option>
													<option value="권역분류6">권역분류6</option>
												</select>
											</div>
										</div>
									</div>
								</div>
								<div class="filter-chip">
									<strong class="chip-title">선택된 필터 <span class="num">4</span></strong>
									<div class="chip-content">
										<button type="button" class="btn xlarge icon border">
											<span class="sr-only">새로고침</span>
											<i class="svg-icon ico-refresh"></i>
										</button>
										<div class="chip-wrap pe-tag-wrap large">
											<span class="btn-tag">
												중앙부처 복지사업
												<button type="button" class="btn-delete">
													<span class="sr-only">삭제</span>
												</button>
											</span>
											<span class="btn-tag">
												임신출산
												<button type="button" class="btn-delete">
													<span class="sr-only">삭제</span>
												</button>
											</span>
											<span class="btn-tag">
												저소득
												<button type="button" class="btn-delete">
													<span class="sr-only">삭제</span>
												</button>
											</span>
											<span class="btn-tag">
												맞춤형급여안내
												<button type="button" class="btn-delete">
													<span class="sr-only">삭제</span>
												</button>
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- //검색 입력폼 -->
				
				<!-- 검색 결과 : 리스트 상단 -->
				<div class="search-list-top">
					<ul class="sch-info" aria-live="polite">
						<li>총 게시물 <span class="point">2</span>, 
							<span class="ui program--division-line">페이지 <strong class="text-point">1</strong> / 1</span> 
						</li>
					</ul>
					<div class="sch-wrap">
						<div class="sch-btn">
							<button type="button" class="btn neutral medium medium outline-none"><i class="svg-icon ico-download" aria-hidden="true"></i>핵심버튼</button>
							<button type="button" class="btn neutral medium medium outline-none"><i class="svg-icon ico-download" aria-hidden="true"></i>핵심버튼</button>
							<button type="button" class="btn neutral medium medium outline-none"><i class="svg-icon ico-download" aria-hidden="true"></i>핵심버튼</button>
						</div>
						<ul class="sch-sort">
							<li class="m-hide">
								<strong class="sort-label"><label for="search_result_count">목록 표시 개수</label></strong>
								<select class="pe-form-select-sort" id="search_result_count">
									<option>12개</option>
									<option>9개</option>
								</select>
								<button type="button" class="fe-btn btn-pagingSelect button_search" title="Apply">적용</button>
							</li>
							<li class="w-hide">
								<button type="button" class="btn large text ico-filter open-modal" data-target="popFilterId">
									<span class="span">필터</span>
									<span class="pe-badge bg primary number">2</span>
									<i class="svg-icon ico-filter"></i>
								</button>
							</li>
							<li>
								<strong class="sort-label"><label for="sort">정렬기준</label></strong>
								<div class="w-sort-btn">
									<button type="button" class="active">관련도순</button>
									<button type="button">최신순</button>
									<button type="button">인기순</button>
								</div>
								<div class="m-sort-btn">
									<select class="pe-form-select-sort" id="sort">
										<option>관련도순</option>
										<option>최신순</option>
										<option>인기순</option>
									</select>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<!-- //검색 결과 : 리스트 상단 -->
								
				<ul class="pe-structured-list">
				  <li class="structured-item">
					<div class="card-img">
						<img src="/assets/styleguide/img/bodo-v.jpg" alt="">
					</div>
					  <div class="in">
						<div class="card-top">
							<span class="pe-badge bg-light primary">뱃지</span>
						  </div>
						  <div class="card-body">
							<div class="c-text">
							  <p class="c-tit"><span class="span">타이틀 영역</span></p>
							  <p class="c-txt">
								간단한 설명이 들어가는 영역입니다. 최대 3줄까지 작성합니다. 간단한 설명이 들어가는 영역입니다. 간단한 설명이 들어가는 영역입니다.
							  </p>
								<ul class="c-info-list">
									<li> 
										<strong class="subjact">신청시간</strong> 
										<span class="con">2023.00.00-2024.00.00</span>
									</li>
									<li> 
										<strong class="subjact">신청시간</strong> 
										<span class="con">2023.00.00-2024.00.00</span>
									</li>
									<li> 
										<strong class="subjact">신청시간</strong> 
										<span class="con">2023.00.00-2024.00.00</span>
									</li>
								</ul>
							</div>
							<div class="c-btn">
							  <a href="#" class="btn primary medium" title="타이틀 영역">신청하기</a>
							</div>
						  </div>
						  <div class="card-btm">
							<span class="tag">태그</span>
							<span class="tag">태그</span>
						  </div>
						  <div class="card-btn">
							<button type="button" class="btn md text" title="타이틀 영역"><i class="svg-icon ico-share"></i> 공유하기</button>
							<button type="button" class="btn md text" title="타이틀 영역"><i class="svg-icon ico-like"></i> 찜하기</button>
						  </div>
					  </div>
				  </li>
				  <li class="structured-item">
					<div class="card-img">
						<img src="/assets/styleguide/img/bodo-v.jpg" alt="">
					</div>
					  <div class="in">
						  <div class="card-top">
							<span class="pe-badge bg-light success">뱃지</span>
						  </div>
						  <div class="card-body">
							<div class="c-text">
							  <p class="c-tit"><span class="span">타이틀 영역</span></p>
							  <p class="c-txt">
								간단한 설명이 들어가는 영역입니다. 최대 3줄까지 작성합니다. 간단한 설명이 들어가는 영역입니다. 간단한 설명이 들어가는 영역입니다.
							  </p>
								<ul class="c-info-list">
									<li> 
										<strong class="subjact">신청시간</strong> 
										<span class="con">2023.00.00-2024.00.00</span>
									</li>
									<li> 
										<strong class="subjact">신청시간</strong> 
										<span class="con">2023.00.00-2024.00.00</span>
									</li>
									<li> 
										<strong class="subjact">신청시간</strong> 
										<span class="con">2023.00.00-2024.00.00</span>
									</li>
								</ul>
							</div>
							<div class="c-btn">
								<a href="#" class="btn secondary medium" title="타이틀 영역">상세보기</a>
								<a href="#" class="btn primary medium" title="타이틀 영역">신청하기</a>
							</div>
						  </div>
						  <div class="card-btm">
							<span class="tag">태그</span>
							<span class="tag">태그</span>
						  </div>
						  <div class="card-btn">
							<button type="button" class="btn md text" title="타이틀 영역"><i class="svg-icon ico-share"></i> 공유하기</button>
							<button type="button" class="btn md text" title="타이틀 영역"><i class="svg-icon ico-like"></i> 찜하기</button>
						  </div>
					  </div>
				  </li>
				  <li class="structured-item">
					<div class="card-img">
						<img src="/assets/styleguide/img/bodo-v.jpg" alt="">
					</div>
					  <div class="in">
						<div class="card-top">
							<span class="pe-badge bg secondary">뱃지</span>
						  </div>
						  <div class="card-body">
							<div class="c-text">
							  <p class="c-tit"><span class="span">타이틀 영역</span></p>
							  <p class="c-txt">
								간단한 설명이 들어가는 영역입니다. 최대 3줄까지 작성합니다. 간단한 설명이 들어가는 영역입니다. 간단한 설명이 들어가는 영역입니다.
							  </p>
								<ul class="c-info-list">
									<li> 
										<strong class="subjact">신청시간</strong> 
										<span class="con">2023.00.00-2024.00.00</span>
									</li>
									<li> 
										<strong class="subjact">신청시간</strong> 
										<span class="con">2023.00.00-2024.00.00</span>
									</li>
									<li> 
										<strong class="subjact">신청시간</strong> 
										<span class="con">2023.00.00-2024.00.00</span>
									</li>
								</ul>
							  <ul class="c-meta">
								<li>Metadata</li>
								<li>Metadata</li>
								<li>Metadata</li>
								<li>Metadata</li>
								<li>Metadata</li>
								<li>Metadata</li>
								<li>Metadata</li>
								<li>Metadata</li>
								<li>Metadata</li>
								<li>Metadata</li>
							  </ul>
							</div>
							<div class="c-btn">
								<a href="#" class="btn secondary medium" title="타이틀 영역">상세보기</a>
								<a href="#" class="btn primary medium disabled" title="타이틀 영역">신청하기</a>
							</div>
						  </div>
						  <div class="card-btm">
							<span class="tag">태그</span>
							<span class="tag">태그</span>
						  </div>
						  <div class="card-btn">
							<button type="button" class="btn md text" title="타이틀 영역"><i class="svg-icon ico-share"></i> 공유하기</button>
							<button type="button" class="btn md text" title="타이틀 영역"><i class="svg-icon ico-like"></i> 찜하기</button>
						  </div>
					  </div>
				  </li>
				</ul>
				
				<ul class="pe-structured-list type-full">
				  <li class="structured-item">
					<div class="card-img">
						<img src="/assets/styleguide/img/bodo-v.jpg" alt="">
					</div>
					  <div class="in">
						  <div class="card-top">
							<span class="pe-badge bg-light primary">뱃지</span>
						  </div>
						  <div class="card-body">
							<div class="c-text">
							  <p class="c-tit"><span class="span">타이틀 영역</span></p>
							  <p class="c-txt">
								간단한 설명이 들어가는 영역입니다. 최대 3줄까지 작성합니다. 간단한 설명이 들어가는 영역입니다. 간단한 설명이 들어가는 영역입니다.
							  </p>
								<ul class="c-info-list">
									<li> 
										<strong class="subjact">신청시간</strong> 
										<span class="con">2023.00.00-2024.00.00</span>
									</li>
									<li> 
										<strong class="subjact">신청시간</strong> 
										<span class="con">2023.00.00-2024.00.00</span>
									</li>
									<li> 
										<strong class="subjact">신청시간</strong> 
										<span class="con">2023.00.00-2024.00.00</span>
									</li>
								</ul>
							</div>
							<div class="c-btn">
								<a href="#" class="btn secondary medium" title="타이틀 영역">상세보기</a>
								<a href="#" class="btn primary medium" title="타이틀 영역">신청하기</a>
							</div>
						  </div>
						  <div class="card-btm">
							<span class="tag">태그</span>
							<span class="tag">태그</span>
						  </div>
						  <div class="card-btn">
							<button type="button" class="btn md text" title="타이틀 영역"><i class="svg-icon ico-share"></i> 공유하기</button>
							<button type="button" class="btn md text" title="타이틀 영역"><i class="svg-icon ico-like"></i> 찜하기</button>
						  </div>
						 </div>
				  </li>
				  <li class="structured-item">
					<div class="card-img">
						<img src="/assets/styleguide/img/bodo-v.jpg" alt="">
					</div>
					  <div class="in">
						  <div class="card-top">
							<span class="pe-badge bg-light success">뱃지</span>
						  </div>
						  <div class="card-body">
							<div class="c-text">
							  <p class="c-tit"><span class="span">타이틀 영역</span></p>
							  <p class="c-txt">
								간단한 설명이 들어가는 영역입니다. 최대 3줄까지 작성합니다. 간단한 설명이 들어가는 영역입니다. 간단한 설명이 들어가는 영역입니다.
							  </p>
								<ul class="c-info-list">
									<li> 
										<strong class="subjact">신청시간</strong> 
										<span class="con">2023.00.00-2024.00.00</span>
									</li>
									<li> 
										<strong class="subjact">신청시간</strong> 
										<span class="con">2023.00.00-2024.00.00</span>
									</li>
									<li> 
										<strong class="subjact">신청시간</strong> 
										<span class="con">2023.00.00-2024.00.00</span>
									</li>
								</ul>
							</div>
							<div class="c-btn">
								<a href="#" class="btn secondary medium" title="타이틀 영역">상세보기</a>
								<a href="#" class="btn primary medium" title="타이틀 영역">신청하기</a>
							</div>
						  </div>
						  <div class="card-btm">
							<span class="tag">태그</span>
							<span class="tag">태그</span>
						  </div>
						  <div class="card-btn">
							<button type="button" class="btn md text" title="타이틀 영역"><i class="svg-icon ico-share"></i> 공유하기</button>
							<button type="button" class="btn md text" title="타이틀 영역"><i class="svg-icon ico-like"></i> 찜하기</button>
						  </div>
					 </div>
				  </li>
				  <li class="structured-item">
					<div class="card-img">
						<img src="/assets/styleguide/img/bodo-v.jpg" alt="">
					</div>
					  <div class="in">
						  <div class="card-top">
							<span class="pe-badge bg secondary">뱃지</span>
						  </div>
						  <div class="card-body">
							<div class="c-text">
							  <p class="c-tit"><span class="span">타이틀 영역</span></p>
							  <p class="c-txt">
								간단한 설명이 들어가는 영역입니다. 최대 3줄까지 작성합니다. 간단한 설명이 들어가는 영역입니다. 간단한 설명이 들어가는 영역입니다.
							  </p>
								<ul class="c-info-list">
									<li> 
										<strong class="subjact">신청시간</strong> 
										<span class="con">2023.00.00-2024.00.00</span>
									</li>
									<li> 
										<strong class="subjact">신청시간</strong> 
										<span class="con">2023.00.00-2024.00.00</span>
									</li>
									<li> 
										<strong class="subjact">신청시간</strong> 
										<span class="con">2023.00.00-2024.00.00</span>
									</li>
								</ul>
							</div>
							<div class="c-btn">
								<a href="#" class="btn secondary medium" title="타이틀 영역">상세보기</a>
								<a href="#" class="btn primary medium" title="타이틀 영역">신청하기</a>
							</div>
						  </div>
						  <div class="card-btm">
							<span class="tag">태그</span>
							<span class="tag">태그</span>
						  </div>
						  <div class="card-btn">
							<button type="button" class="btn md text" title="타이틀 영역"><i class="svg-icon ico-share"></i> 공유하기</button>
							<button type="button" class="btn md text" title="타이틀 영역"><i class="svg-icon ico-like"></i> 찜하기</button>
						  </div>
					</div>
				  </li>
				</ul>
				
				<!-- 페이지네이션 영역 -->
				<div class="pe-pagination">
					<span class="page-navi prev disabled" href="#">이전</span>
					<div class="page-links">
						<a class="page-link" href="#">1</a>
						<a class="page-link" href="#">2</a>
						<a class="page-link" href="#">3</a>
						<a class="page-link active" href="#">4</a>
						<a class="page-link" href="#">5</a>
						<a class="page-link" href="#">6</a>
						<a class="page-link" href="#">7</a>
						<a class="page-link" href="#">8</a>
						<span class="page-link link-dot"></span>
						<a class="page-link" href="#">99</a>
					</div>
					<a class="page-navi next" href="#">다음</a>
				</div>
				<!-- //페이지네이션 영역 -->`
  },
  "progview": {
    id: "progview",
    title: "프로그램 뷰",
    code: `<div class="pe-view-area">
					<!-- viewTopBox : s -->
					<!-- 슬아이드 일떄 : s -->
					<div class="progView-top-box">
						<!-- 슬라이드 -->
						<div class="pe-gallery">
							<div class="swiper slider">
							<div class="swiper-wrapper">
								<div class="swiper-slide"><img src="/assets/styleguide/img/bodo-v.jpg" alt="이미지 1"></div>
								<div class="swiper-slide"><img src="/assets/styleguide/img/bodo-v.jpg" alt="이미지 2"></div>
								<div class="swiper-slide"><img src="/assets/styleguide/img/bodo-v.jpg" alt="이미지 3"></div>
								<div class="swiper-slide"><img src="/assets/styleguide/img/bodo-v.jpg" alt="이미지 4"></div>
								<div class="swiper-slide"><img src="/assets/styleguide/img/bodo-v.jpg" alt="이미지 5"></div>
							</div>
							<!-- 컨트롤 -->
							<div class="control">
								<div class="swiper-pagination swiper-pagination-fraction">
								<span class="swiper-pagination-current">1</span> / 
								<span class="swiper-pagination-total">1</span>
								</div>

								<button type="button" class="swiper-btn swiper-btn-toggle playing">정지</button>
							</div>
							<div class="control c2">
								<button type="button" class="swiper-btn swiper-btn-prev">
								<span class="blind">이전 슬라이드</span>
								</button>
								<button type="button" class="swiper-btn swiper-btn-next">
								<span class="blind">다음 슬라이드</span>
								</button>
							</div>
							<!-- 컨트롤 -->
							<!-- 불릿 -->
							<div class="swiper-bullets"></div>
							<!-- 불릿 -->
							</div>
						</div>
						<!-- 슬라이드 -->
						<!-- 텍스트 인포 -->
						<div class="pe-infoBox">
							<div class="cate-wrap">
								<span class="pe-badge bg-light large primary">진행중</span>
								<span class="pe-badge outline large primary">신청중</span>
							</div>
							<strong class="pe-info-title">타이틀 영역</strong>
							<ul class="pe-info-list">
								<li> 
									<strong class="subjact">신청시간</strong> 
									<span class="con">2023.00.00-2024.00.00</span>
								</li>
								<li> 
									<strong class="subjact">신청시간</strong> 
									<span class="con">2023.00.00-2024.00.00</span>
								</li>
								<li> 
									<strong class="subjact">신청시간</strong> 
									<span class="con">2023.00.00-2024.00.00</span>
								</li>
							</ul>
						</div>
						<!-- 텍스트 인포 -->
						<div class="card-btn">
							<button type="button" class="btn md text" title="공유하기 버튼"><i class="svg-icon ico-share"></i> 공유하기</button>
							<button type="button" class="btn md text" title="찜하기 버튼"><i class="svg-icon ico-like"></i> 찜하기</button>
						</div>
					</div>
					<!-- 슬라이드 일띠 : e -->
					<div class="mb_20"></div>
					<!-- 이미지 일때 : s -->
					<div class="progView-top-box">
						<div class="pe-gallery">
							<div class="thm">
								<a href="/assets/styleguide/img/bodo-v.jpg" class="link big" data-alt="이미지 크게보기">
									<div class="thm--inner">
										<img src="/assets/styleguide/img/bodo-v.jpg" alt="이미지 없음">
									</div>
								</a>
							</div>
						</div>
						<div class="pe-infoBox">
							<div class="cate-wrap">
								<span class="pe-badge bg large success">선착순</span>
								<span class="pe-badge bg-light large primary">접수중</span>
							</div>
							<strong class="pe-info-title">타이틀 영역</strong>
							<ul class="pe-info-list">
								<li>
									<strong class="subjact">신청시간</strong>
									<span class="con">2023.00.00-2024.00.00</span>
								</li>
								<li>
									<strong class="subjact">신청시간</strong>
									<span class="con">2023.00.00-2024.00.00</span>
								</li>
								<li>
									<strong class="subjact">신청시간</strong>
									<span class="con">2023.00.00-2024.00.00</span>
								</li>
							</div>
						</div>
					</div>

					<script src="/pcms/common/js/imglayer/imglayer.js"></script>
					<script>
						$(document).ready(function () {
							var param = ".thm",
								btn = ".big",
								target = "body",
								fadein = 300;

							imglayer(param, btn, target, fadein);
						});
					</script>
					<!-- 이미지 일때 : e -->
					<div class="mb_20"></div>
					<!-- 이미지 업을 때 : s -->
					<div class="progView-top-box noneImg height-auto">
						<div class="pe-infoBox">
							<div class="cate-wrap">
								<span class="pe-badge bg large primary">장항읍</span>
								<span class="pe-badge bg-light large primary">진행중</span>
							</div>
							<strong class="pe-info-title">노래교실</strong>
							<ul class="pe-info-list pl-100">
								<li>
									<strong class="subjact">운영기간</strong>
									<span class="con">2026-01-14 ~ 2026-01-24</span>
								</li>
								<li>
									<strong class="subjact">운영정보</strong>
									<span class="con">매주 화요일 19:00 ~ 21:00</span>
								</li>
								<li>
									<strong class="subjact">모집인원</strong>
									<span class="con">30명</span>
								</li>
								<li>
									<strong class="subjact">수업료 정보</strong>
									<span class="con">재료비 자부담</span>
								</li>
								<li>
									<strong class="subjact">운영장소</strong>
									<span class="con">주민자치센터 2층</span>
								</li>
								<li>
									<strong class="subjact">홈페이지</strong>
									<span class="con">
										<a href="#" target="_blank" title="새창열림" class="btn secondary medium">
											홈페이지 바로가기
											<i class="svg-icon ico-blank" aria-hidden="true"></i>
										</a>
									</span>
								</li>
							</ul>
						</div>
					</div>
					<!-- 이미지 업을 때 : e -->
					<!-- viewTopBox : e -->
					<!-- viewBottomBox : s -->
					<div class="progView-bottom-box">
						<h3 class="h3">프로그램 설명</h3>
						<div class="text-con">
							이 프로그램은 일상 속에서 발견할 수 있는 교양과 지식을 쉽고 재미있게 전달합니다.
							다양한 분야의 전문가들이 함께 참여해 깊이 있는 이야기를 들려드립니다.
							우리가 미처 몰랐던 사실과 흥미로운 이야기들이 한 편의 강연처럼 펼쳐집니다.
							매주 새로운 주제를 통해 생각의 폭을 넓히고 통찰력을 키워보세요.
							역사, 과학, 철학, 예술 등 다채로운 내용을 누구나 이해하기 쉽게 구성했습니다.
							바쁜 일상 속에서도 짧은 시간에 교양을 쌓을 수 있도록 도와드립니다.
							삶의 방향을 다시 생각하게 만드는 따뜻하고 의미 있는 이야기들이 기다리고 있습니다.
							시청자와의 소통을 중요하게 생각하며, 참여형 콘텐츠로 구성됩니다.
							배우는 즐거움과 생각하는 기쁨을 함께 나누는 시간입니다.
							당신의 일상에 작은 영감을 더해줄 교양 프로그램, 지금 시작해보세요.
						</div>	
						
						<h3 class="h3">이미지</h3>	
						<div class="pe-gallery">
							<div class="swiper slider">
								<div class="swiper-wrapper">
									<div class="swiper-slide">
										<img src="/assets/styleguide/img/bodo-v.jpg" alt="1">
									</div>
									<div class="swiper-slide">
										<img src="/assets/styleguide/img/bodo-v.jpg" alt="2">
									</div>
									<div class="swiper-slide">
										<img src="/assets/styleguide/img/bodo-v.jpg" alt="3">
									</div>
									<div class="swiper-slide">
										<img src="/assets/styleguide/img/bodo-v.jpg" alt="4">
									</div>
									<div class="swiper-slide">
										<img src="/assets/styleguide/img/bodo-v.jpg" alt="5">
									</div>
									<div class="swiper-slide">
										<img src="/assets/styleguide/img/bodo-v.jpg" alt="6">
									</div>
								</div>
								<div class="control">
									<div class="swiper-pagination swiper-pagination-fraction">
										<span class="swiper-pagination-current">1</span> /
										<span class="swiper-pagination-total">1</span>
									</div>
									<button type="button" class="swiper-btn swiper-btn-toggle playing">정지</button>
									<button type="button" class="swiper-btn swiper-btn-prev">
										<span class="blind">이전 슬라이드</span>
									</button>
									<button type="button" class="swiper-btn swiper-btn-next">
										<span class="blind">다음 슬라이드</span>
									</button>
								</div>
								<div class="swiper-bullets"></div>
							</div>
							<div class="swiper thumb">
								<div class="swiper-wrapper">
									<button type="button" class="swiper-slide">
										<img src="/assets/styleguide/img/bodo-v.jpg" alt="1">
									</button>
									<button type="button" class="swiper-slide">
										<img src="/assets/styleguide/img/bodo-v.jpg" alt="2">
									</button>
									<button type="button" class="swiper-slide">
										<img src="/assets/styleguide/img/bodo-v.jpg" alt="3">
									</button>
									<button type="button" class="swiper-slide">
										<img src="/assets/styleguide/img/bodo-v.jpg" alt="4">
									</button>
									<button type="button" class="swiper-slide">
										<img src="/assets/styleguide/img/bodo-v.jpg" alt="5">
									</button>
									<button type="button" class="swiper-slide">
										<img src="/assets/styleguide/img/bodo-v.jpg" alt="6">
									</button>
								</div>
							</div>
						</div>

						<div class="board-view__file">
							<div class="board-file__item n2">
								<a href="javascript:fn_egov_downFile('FILE_000000002197Ht1','0')" class="board-file__link">
									<div class="board-file__text-wrap">
										<i class="board__icon board__icon--jpg" aria-hidden="true"></i>
										<strong class="board-file__text">
											첨부파일 한 개 또는 제목이 엄청 길 경우 또는 용량까지 표시할 경우 짱구는 못말려 짱구유리철수맹구훈이 떡잎마을방범대.jpg
										</strong>
										<span class="board-file__capacity">13,230KB</span>
									</div>
									<span class="board-file__button board-file__button--download">
										<i class="board-flie__icon board-flie__icon--download">다운로드</i>
									</span>
								</a>
								<a href="#n" class="board-file__button board-file__button--preview">
									<i class="board-flie__icon board-flie__icon--preview">미리보기</i>
								</a>
							</div>
							<div class="board-file__item board-file__item--half">
								<a href="javascript:fn_egov_downFile('FILE_000000002197Ht1','0')" class="board-file__link">
									<div class="board-file__text-wrap">
										<i class="board__icon board__icon--jpg" aria-hidden="true"></i>
										<strong class="board-file__text">첨부파일 2개 이상.jpg</strong>
									</div>
									<span class="board-file__button board-file__button--download">
										<i class="board-flie__icon board-flie__icon--download">다운로드</i>
									</span>
								</a>
							</div>
							<div class="board-file__item board-file__item--half n2">
								<a href="javascript:fn_egov_downFile('FILE_000000002197Ht1','0')" class="board-file__link">
									<div class="board-file__text-wrap">
										<i class="board__icon board__icon--pdf" aria-hidden="true"></i>
										<strong class="board-file__text">첨부파일 2개 이상.pdf</strong>
									</div>
									<span class="board-file__button board-file__button--download">
										<i class="board-flie__icon board-flie__icon--download">다운로드</i>
									</span>
								</a>
								<a href="#n" class="board-file__button board-file__button--preview">
									<i class="board-flie__icon board-flie__icon--preview">미리보기</i>
								</a>
							</div>
						</div>

						<h3 class="h3">회사 사용시 적용</h3>
						<table class="pe-slot-list text-center">
							<colgroup>
								<col style="width:15%">
								<col style="width:35%">
								<col style="width:50%">
							</colgroup>
							<tbody>
								<tr>
									<td>
										<strong class="slot-title">0회차</strong>
									</td>
									<td>
										<div class="slot-date"><i class="ico-calendar"></i>2025년 3월 22일(금) 13:00</div>
									</td>
									<td>
										<div class="align-justify">
											<div class="slot-date"><i class="ico-calendar"></i>2025년 3월 22일(금) 13:00</div>
											<button type="button" class="btn secondary medium">신청하기</button>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<strong class="slot-title">0회차</strong>
									</td>
									<td>
										<div class="slot-date"><i class="ico-calendar"></i>2025년 3월 22일(금) 13:00</div>
									</td>
									<td>
										<div class="align-justify">
											<div class="slot-date"><i class="ico-calendar"></i>2025년 3월 22일(금) 13:00</div>
											<button type="button" class="btn secondary medium disabled">모집마감</button>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<strong class="slot-title">0회차</strong>
									</td>
									<td>
										<div class="slot-date"><i class="ico-calendar"></i>2025년 3월 22일(금) 13:00</div>
									</td>
									<td>
										<div class="align-justify">
											<div class="slot-date"><i class="ico-calendar"></i>2025년 3월 22일(금) 13:00</div>
											<button type="button" class="btn secondary medium">신청하기</button>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- viewBottomBox : e -->
				</div>`
  },
  "document": {
    id: "document",
    title: "디지털문서",
    code: `<div class="pe-document-list">
						<div class="item">
								<div class="img">
										<img src="/assets/styleguide/img/document.png" alt="">
								</div>
								<div class="text">
										<div class="tit-wrap">
												<span class="stit">대분류명 > 소분류명</span>
												<strong class="mtit">타이틀이 들어갑니다</strong>
										</div>
										<div class="btn-wrap">
												<button type="button" class="btn secondary small"><i class="svg-icon ico-download" aria-hidden="true"></i>다운로드</button>
												<button type="button" class="btn primary small"><i class="svg-icon ico-advanced" aria-hidden="true"></i>바로보기</button>
										</div>
								</div>
						</div>
						<div class="item">
								<div class="img">
										<img src="/assets/styleguide/img/document.png" alt="">
								</div>
								<div class="text">
										<div class="tit-wrap">
												<span class="stit">대분류명 > 소분류명</span>
												<strong class="mtit">타이틀이 들어갑니다</strong>
										</div>
										<div class="btn-wrap">
												<button type="button" class="btn secondary small"><i class="svg-icon ico-download" aria-hidden="true"></i>다운로드</button>
												<button type="button" class="btn primary small"><i class="svg-icon ico-advanced" aria-hidden="true"></i>바로보기</button>
										</div>
								</div>
						</div>
						<div class="item">
								<div class="img">
										<img src="/assets/styleguide/img/document.png" alt="">
								</div>
								<div class="text">
										<div class="tit-wrap">
												<span class="stit">대분류명 > 소분류명</span>
												<strong class="mtit">타이틀이 들어갑니다</strong>
										</div>
										<div class="btn-wrap">
												<button type="button" class="btn secondary small"><i class="svg-icon ico-download" aria-hidden="true"></i>다운로드</button>
												<button type="button" class="btn primary small"><i class="svg-icon ico-advanced" aria-hidden="true"></i>바로보기</button>
										</div>
								</div>
						</div>
						<div class="item">
								<div class="img">
										<img src="/assets/styleguide/img/document.png" alt="">
								</div>
								<div class="text">
										<div class="tit-wrap">
												<span class="stit">대분류명 > 소분류명</span>
												<strong class="mtit">타이틀이 들어갑니다</strong>
										</div>
										<div class="btn-wrap">
												<button type="button" class="btn secondary small"><i class="svg-icon ico-download" aria-hidden="true"></i>다운로드</button>
												<button type="button" class="btn primary small"><i class="svg-icon ico-advanced" aria-hidden="true"></i>바로보기</button>
										</div>
								</div>
						</div>
						<div class="item">
								<div class="img">
										<img src="/assets/styleguide/img/document.png" alt="">
								</div>
								<div class="text">
										<div class="tit-wrap">
												<span class="stit">대분류명 > 소분류명</span>
												<strong class="mtit">타이틀이 들어갑니다</strong>
										</div>
										<div class="btn-wrap">
												<button type="button" class="btn secondary small"><i class="svg-icon ico-download" aria-hidden="true"></i>다운로드</button>
												<button type="button" class="btn primary small"><i class="svg-icon ico-advanced" aria-hidden="true"></i>바로보기</button>
										</div>
								</div>
						</div>
						<div class="item">
								<div class="img">
										<img src="/assets/styleguide/img/document.png" alt="">
								</div>
								<div class="text">
										<div class="tit-wrap">
												<span class="stit">대분류명 > 소분류명</span>
												<strong class="mtit">타이틀이 들어갑니다</strong>
										</div>
										<div class="btn-wrap">
												<button type="button" class="btn secondary small"><i class="svg-icon ico-download" aria-hidden="true"></i>다운로드</button>
												<button type="button" class="btn primary small"><i class="svg-icon ico-advanced" aria-hidden="true"></i>바로보기</button>
										</div>
								</div>
						</div>
				</div>`
  },
  "btn-wrap": {
    id: "btn-wrap",
    title: "버튼 배치",
    code: `<div class="pe-btn-group text-center">
						<button type="button" class="btn neutral large">large 버튼</button>
						<button type="button" class="btn primary large">large 버튼</button>
					</div>
					<div class="pe-btn-group text-right">
						<button type="button" class="btn neutral large">large 버튼</button>
						<button type="button" class="btn primary large">large 버튼</button>
					</div>
					<div class="pe-btn-group text-left">
						<button type="button" class="btn neutral large">large 버튼</button>
						<button type="button" class="btn primary large">large 버튼</button>
					</div>

					<div class="pe-btn-group text-between">
						<button type="button" class="btn neutral large">large 버튼</button>
						<button type="button" class="btn primary large">large 버튼</button>
					</div>
					<div class="pe-btn-group text-between">
						<button type="button" class="btn neutral large">large 버튼</button>

						<div class="pe-btn-wrap">
							<button type="button" class="btn neutral large">large 버튼</button>
							<button type="button" class="btn primary large">large 버튼</button>
							<button type="button" class="btn tertiary large">large 버튼</button>
						</div>
					</div>`
  },
  "button": {
    id: "button",
    title: "버튼",
    code: `<button type="button" class="btn primary medium">버튼 : primary</button>
<button type="button" class="btn secondary medium">버튼 : secondary</button>
<button type="button" class="btn neutral medium">버튼 : neutral</button>
<button type="button" class="btn tertiary medium">버튼 : tertiary</button>`
  },
};
