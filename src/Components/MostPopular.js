import c1 from "../Assets/images/c1.jpg"
import c2 from "../Assets/images/c2.jpg"
import c3 from "../Assets/images/c3.jpg"
import c4 from "../Assets/images/c4.jpg"

function MostPopular()
{
    return(
        <div class="popular">
            
            <div class="popular__container">
                <div class="course-card">
                    <img src={c1} alt="Course"></img>
                    <p>2024 Python Data Visualisation Masterclass</p>
                    <p>Col Steele</p>
                    <p>4.9⭐⭐⭐⭐</p>
                    <p>449 <del>1999</del></p>
                </div>
                
                <div class="course-card">
                    <img src={c2} alt="Course"></img>
                    <p>Web Development Bootcamp 2024</p>
                    <p>Col Steele</p>
                    <p>3.9⭐⭐⭐</p>
                    <p>449 <del>1999</del></p>
                </div>
                
                <div class="course-card">
                    <img src={c3} alt="Course"></img>
                    <p>Master UI/UX Designing with Figma</p>
                    <p>Col Steele</p>
                    <p>4.9⭐⭐⭐⭐</p>
                    <p>449 <del>1999</del></p>
                </div>
                
                <div class="course-card">
                    <img src={c4} alt="Course"></img>
                    <p>Basic to Advance Programming with EMC</p>
                    <p>Col Steele</p>
                    <p>4.9⭐⭐⭐⭐</p>
                    <p>449 <del>1999</del></p>				
                </div>
                
                <div class="course-card">
                    <img src={c1} alt="Course"></img>
                    <p>2024 Python Data Visualisation Masterclass</p>
                    <p>Col Steele</p>
                    <p>4.9⭐⭐⭐⭐</p>
                    <p>449 <del>1999</del></p>
                </div>
                
                <div class="course-card">
                    <img src={c2} alt="Course"></img>
                    <p>Web Development Bootcamp 2024</p>
                    <p>Col Steele</p>
                    <p>3.9⭐⭐⭐</p>
                    <p>449 <del>1999</del></p>
                </div>
                
                <div class="course-card">
                    <img src={c3} alt="Course"></img>
                    <p>Master UI/UX Designing with Figma</p>
                    <p>Col Steele</p>
                    <p>4.9⭐⭐⭐⭐</p>
                    <p>449 <del>1999</del></p>
                </div>
                
                <div class="course-card">
                    <img src={c4} alt="Course"></img>
                    <p>Basic to Advance Programming with EMC</p>
                    <p>Col Steele</p>
                    <p>4.9⭐⭐⭐⭐</p>
                    <p>449 <del>1999</del></p>				
                </div>
            </div>		
        </div>
    )
}

export default MostPopular