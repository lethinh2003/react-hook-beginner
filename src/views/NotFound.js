import './NotFound.css';
import { useHistory } from "react-router-dom";
const NotFound = () => {
    const imgCat = 'https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=301&q=80';
let history = useHistory();
function handleBackClick() {
    history.push("/");
  }
    return(
    <>
  
 
    <div class="error">
    <div class="error-page">
        <div class="error-page__header">
            <span class="error-page__header--title">Not Found</span>
            <i class="fa fa-bars error-page__header--icon"></i>
        </div>
        <div class="error-page__content">
            <span class="error-page__content--title">
                404
            </span>
            <h3 class="error-page__content--desc">Look like the page doesn't exist.</h3>
            <h3 class="error-page__content--desc child">(Here's a cat for your trouble.)</h3>
        <span class="error-page__content--back" onClick={handleBackClick}><i class="fa fa-arrow-left"></i> Head back</span>
    </div>
  
    <div class="error-page__image">
 
        <img src={imgCat} alt="" class="error-page__image--cat" />    

    </div>

    </div>

</div>

    </>
)
}
export default NotFound;