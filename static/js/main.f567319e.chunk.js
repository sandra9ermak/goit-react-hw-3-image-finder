(this["webpackJsonpgoit-react-hw-3-image-finder"]=this["webpackJsonpgoit-react-hw-3-image-finder"]||[]).push([[0],{30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(21),s=a.n(r),i=(a(30),a(31),a(12)),c=a(7),l=a(8),u=a(10),m=a(9),h=(a(32),a(0)),d=function(e){var t=e.onSubmit,a=e.onChange;return Object(h.jsx)("header",{className:"Searchbar",children:Object(h.jsxs)("form",{className:"SearchForm",onSubmit:t,children:[Object(h.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(h.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(h.jsx)("input",{onChange:a,className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})},g=a(25),p=["webformatURL","alt","largeImageURL","showModalImg"],b=function(e){var t=e.webformatURL,a=e.alt,n=e.largeImageURL,o=e.showModalImg,r=Object(g.a)(e,p);return Object(h.jsx)("li",{className:"ImageGalleryItem",onClick:function(){return o({modalImage:{largeImageURL:n,alt:a}})},children:Object(h.jsx)("img",{src:t,alt:a,className:"ImageGalleryItem-image"})},r)},f=function(e){var t=e.images,a=e.showModalImg;return Object(h.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){return Object(h.jsx)(b,{showModalImg:a,webformatURL:e.webformatURL,alt:e.tags,largeImageURL:e.largeImageURL},e.id)}))})},j=function(e){var t=e.onClick;return Object(h.jsx)("div",{className:"button-wrapper",children:Object(h.jsx)("button",{onClick:t,type:"button",className:"Button",children:"Load more"})})},O=a(22),v=a.n(O),y=(a(54),function(){return Object(h.jsx)("div",{className:"loaderOverlay",children:Object(h.jsx)("div",{className:"loaderSpiner",children:Object(h.jsx)(v.a,{type:"ThreeDots",color:"#1229aa",height:120,width:150,timeout:4e3})})})}),w=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).modalEscape=function(t){27===t.keyCode&&e.props.onClick()},e.clickBackdrop=function(t){t.currentTarget===t.target&&e.props.onClick()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.modalEscape)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.modalEscape)}},{key:"render",value:function(){return Object(h.jsx)("div",{className:"Overlay",onClick:this.clickBackdrop,children:Object(h.jsx)("div",{className:"Modal",children:Object(h.jsx)("img",{src:this.props.modalImage.largeImageURL,alt:this.props.modalImage.tags})})})}}]),a}(o.a.Component),I=w,x=a(24),S=a(4),k=a.n(S);k.a.defaults.baseURL="https://pixabay.com/api/";var L=function(e){return k.a.defaults.params=Object(x.a)({key:"23801243-e85441bee56b02cd6046c9902"},e)},M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return L({q:e,image_type:"photo",orientation:"horizontal",per_page:12,page:t,safesearch:a}),k.a.get(k.a.defaults.baseURL).then((function(e){return e.data.hits})).catch((function(e){throw e}))},C=a(23),N=a.n(C),U=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={images:[],error:!1,isLoading:!1,searchForm:"",inputQuery:"",page:0,isModalOpen:!1,modalImage:{}},e.renderImages=function(){e.setState({isLoading:!0}),M(e.state.searchForm,e.state.page).then((function(t){if(0===t.length)return N.a.Notify.failure("There is no results with ".concat(e.state.searchForm.toUpperCase()," request"));e.setState((function(e){return{images:[].concat(Object(i.a)(e.images),Object(i.a)(t))}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),e.setState({isLoading:!1})}))},e.handleChange=function(t){e.setState({inputQuery:t.target.value})},e.submitSearchForm=function(t){t.preventDefault(),e.setState({searchForm:e.state.inputQuery,page:1,images:[]})},e.handleButtonLoad=function(){e.setState((function(e){return{page:e.page+1}}))},e.openModal=function(){e.setState((function(e){return{isModalOpen:!e.isModalOpen}}))},e.showModalImg=function(t){var a=t.modalImage;e.setState({modalImage:a}),e.openModal()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),M().then((function(t){return e.setState({images:t})})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})}))}},{key:"componentDidUpdate",value:function(e,t){this.state.searchForm===t.searchForm&&this.state.page===t.page||this.renderImages()}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(d,{onSubmit:this.submitSearchForm,onChange:this.handleChange}),this.state.isLoading&&Object(h.jsx)(y,{}),0!==this.state.images.length&&Object(h.jsx)(f,{images:this.state.images,isModalOpen:this.state.isModalOpen,showModalImg:this.showModalImg}),0!==this.state.images.length&&Object(h.jsx)(j,{onClick:this.handleButtonLoad}),this.state.isModalOpen&&Object(h.jsx)(I,{modalImage:this.state.modalImage,onClick:this.openModal})]})}}]),a}(o.a.Component),F=U;s.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(F,{})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.f567319e.chunk.js.map