import React, { Component } from 'react';
import './About.css'
import NavBar from '../navBar/NavBar'

// @inject('UserStore')
class About extends Component {
    render(){
        return(
            <div>
              <NavBar/>
              <div id='container'>
                <div id='profile-container'>
<ul className="responsive_grid">
  <li>
    <div className="team_member">
       <div className="info">
         <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPDQ8NDQ8QDw8ODg8NDhAPDQ8QDg0QFhEXFhURFRUZHSggGBoxHRUWIjEjJSkrLjAuFx8zODMsNygtMDcBCgoKDg0OGxAQGC0mICYtLS0tLS0tLS0tKy0tLS0tLSsrKy0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALoBEAMBIgACEQEDEQH/xAAcAAADAAMBAQEAAAAAAAAAAAAAAQIEBQYHAwj/xABAEAABAwIEAwUGAwQJBQAAAAABAAIDBBEFEiExBkFREyJhcZEHFDJCgaFSscEjQ2LwJDNTcoKSorLhFRZjwvH/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAfEQEAAwADAQADAQAAAAAAAAAAAQIRAxIhMRNBgVH/2gAMAwEAAhEDEQA/APSUIQsNAJpBNABMIQgYVBIJhEUFQUhUFRQVBIKggYVJBUEAnZATQKyLKkIJskqQghSVZUlBBUlWVJQQVJVlQUElSVRSKgkpFNCKSRTSQCEIQCEIQNCEIGmkmEDCoKQqCqKCoKQrCCgqCkKwgYVBIKggaaQWo4mxg0sTBG3PPUP7Gnba4z2vnd4D7kgc0IjTxPiWlpntjkku9xsWsGYs1sS7p+a2FJVxzNzxPD2+FwR5g6heb1HBhFnVM7nTv78pA7uY72WygwWemp3VVJM53YjM5jg0m1wS5u2lgQQeTiuUcvuPRPBld13qSw8HxAVNOyYDKXNGdml2OsCWn1+4WYV1edJUlWVJQQVJVlQUEFSVZUFBJUlUVJQJJMpKKSEIQJCEIBCEIGhCEDTCQTCCgqCkKgqigqCkKwgoKgpCsIKCoKQqCBrmOM2SiSjmgjdJIx8rWhgaXBxa14PeBH7s305dV061eOF7DFOy2WLtM+puLgAEDbr/ACVLfG+ONs82jfi08znNqJNL9r7xDEGR9GtZsLnT76rbYLPiDe2p4/eKh8ht38jI4xZzdnDKNS0kEbNIG608dNNI581RIcpfkY9kjnF+5cOz0sNtbm623D+IS01XGBfI/LGGl5OcbXt8ttOfJeaL5MS+hbjiay6/hIk073OjdETM8FjyCQRYHUGx6X8FuljUUGUyP5yOB2t3RoLjrv8ASyyV6a/Hzr/SKkqipKrKCpKsqCggqSrKgoJKkqipKCSkmVh1tb2bgLA6XKispCw6XEo5H5BcPsTYje2+qzECQhCBoTQgEJoRAmEJhFBNt9Lmw8+n2K+ojNr20WPP+7H/AJR/sctgXZY3G17NJsNzpsqjHCoKWqwgoKgpCsIGFQCQVAIGplia9rmPF2uBa4HYgixCVZM2GJ80zmxxxMdJI5xsGMaLlx+i0vDXF9JiM8sVCZJRTsbJJIYnRx3c4hrBnsSTldyt3VcHm2PzVFIXCkk7WkIbIx+/cd8N7b7LO4DfPU1jH1jS1rWl7O5bO7YAnpoV0eKcKCKWQQG0Li6VsRJIj1zODL/LfXLy5aL64ZRSOIMdhqWB25B3sB9b8gvJbtFsz174ms13t469jw74SD1tyTWlx7HafCYqcVIkyTOe10zGh4EgaD3gLHUXtYfKtjhddFV07KmleJYZASx7b62JBBB1BBBBB2IXryf28E5vj7lSVRSKCCpKsqCoIKkqypKCCpKopIIXHYvXZpXkHS9h5DRdPi9R2UD387ZW+Z0XndVPurDUOq4TizdpOfCJv5u/9V0Sw8GpOxpooz8Qbmf/AHnan7m30WapKJQmhQNCaEQITQgEwhNBjV8chZmhcA9mZ7Wloc2Q5TZp1FvO65TB+NZK9slNJTCIPY5mftHgX2IdYAs+hK7ULjeJMAMEsmJUcefM0+90wF+0F7umjH4+o56ka75vueO3DNNy38dnERlFtrWX0C4/h/iBsrGmF1ybADfN0+q7UMJay4GfKC+22a2tvqnHfsnLxzRIVBAjN7WN0i9jSQ94aRysbro5PtFHfwHUr6vkA7rQfoNSvi+dr2D4S0nWxBCwyWMPdLnN/CTf0W4jEcj7Z8QMWDujBLXVVRFT+OUXlcPK0dvqr9imHdhg/vFu/WTyykmwsxh7Jg8u44/4ytL7aXtlpaNseQD3pxILmtseycL23J15LtuAQ1uD0LGua7LTsDi03b2gvnH+a/oqN2BmdrY2ubWVRRNZYNAba5sNAvm13e/nohzje3XRFcx7VqT3jBKkkDNT5KthI+HI7vkf4C8fVaD2HVxfQTwXt7vVEtA5MkYHf7g9dzj9N21DVwutaWlnjt/ejcP1XlXsJeWy14cW9+GleAJGO+F0lzYH+MKI9qY8PGV1r8ivg4WNjuFj3zWsQNeZssprXOGupA0PXwWZhXyKkplIrIgrArMWp4TaWZjDroTrpus9xsLnQDUk7BcvWcURSU5lgkAbmkjBe7IXltxoBc20P62WbTka3x0m9usPtLxlhzd6pp/uxyu/JqxKjjuhaAWPfJqAbRubYcz3rX8l5TPVyvnMUAErqhpY5jY2PdPI52YgZgXXvfUW0A6LvcE9l9O0Mkr3mofZrnQt7kAdocpI7zwNtwD0Urbf07cnFWk/V4/xG2pZGyGKa1s77xE94jYZb3HjpvssHh6hkqKmImOQQh2d73RvDCG65bkWNyAPqvSmNDQGt0a0BoA0AA2AQt64alCaFGUoTQimiyaFUCE0IEmEJoBUEkwg0FPgNPDWy1FMwNe4Z3M71mOO7mDYAm+3ityavbNptfXbdfLFcPFREWZix9jkkaSHMJ32I0NtQuOosPxCglLDG+ppSSbxHtXR3OpDfiPlZWJiGvv2XoFBiOYWvcg2d9DY/l91h4hUZtNAb2aeRI5ea56OuLZJI5aers4lzZIaeZwBIAOw2NgfNWytleDGKOrkZtd8AizdD3iLFa2DGSyne+TK1rmHdxJLY8vM33B/NI1UcMgvMXOb/A0B/iBmvt0uuS4k4mqKZ/uhzRmwd2b3Mc9jeWZzTbXNtfS3isfDsTDwC5okB3a42+/JcL8kxPjrWkT9ZvtnhEmHRVcLtGzsDixxFw4Ftj9SL+QWw9keIk4RTMAHcqHwO6i8psf8pCwMagbV0FTRxFwMsYc2OX4myNcHMcD8zcwALhyOuo1wvYRIx8VRE+YsfT1LalsPdBkD4sux1uDGfVdaX7RrnevWXrvzC3Qn7L5yHvr5Me7MTt4W6o7Q3uRtzvYLesYwOKqsRYdWSHZlJUOPXSJy8t9hMTia+d5LsrKeBpJJ1Od7hr5M+y7H2rYkxmC1Ya8F0jWQgBwN88jWn7ErRexqNseFSOJBkqKmWRrB8RaxrYx92uUmVz13E1QNiC7c2HM6aL60OIsBAIDPFshcR58lzeJulLzmcyNl/gvcuH8QGpHgbDrdaqevIJu7T6D7BeS/NO+PTHFGPUwzMzOCHHkR83/Kwq2tigAdM8MDiQBYlxsLnQfzqFyvCOOPL+zBzRRslkcSdGkhha38z6rB44rnFsM7m90dpG83BDJbgkfW3+ldZvPTtEOdOOJv1lkcQcYMDHNYLMILSXfE8Ea6cgvMODeH8RqJYqcQTe4h2cyvHZRmJ2uZjzbMDYfDc6recN4I/F6o9pmbRwkGdwuO1PKFp8eZ5DxIXsjGBoDWgNa0BrQBYNAFgAOQUpEzG2a5bRSco12EYJTUbMlLCyO/xOAvI/xc83c76lZ6opLo8+6lCaSBITQgmyLJoQNCpCCU00IEmhCAVJJoGmEkwgoJqUwg8i9suGdnVU9Y0m04yPHLMzKL35aBq5fBa+xtfn+v/wAXrXtPw8z4XI9rczqZzagD+EaP/wBJJ+i8OY7I4vadHd4eW5H0Nx9Fi8a60nHrOC1DJGNbI0OANxuHMP4mkatPktdhnDwoMWrKgyRNoauHtInyPLbTGVruzIBaLXL/AKFtlocCxgsLSD/z4Lv4Z4K2B0DnNtK3QFrHPjfye1rgWuI8lxrM0l1tHb1saXGGsPecWgWJcZTJC5o3sXC4+pPmsyPHKWU5WAv6ABzs3kCvJ6vCpqR8kbxBJldZ4hwunBcPlcQ2xIsb3H2WdhuMvDAII3X+DRpGoNg3fTpZb/LMJ+KJdJ7T8NfWULaeGRsb3TxOEUjs7pBqAAG6jvFvUWCvAaR9Bh1NQjK6SGNwkey5bne4vfY9LuPovtgsUkcbqisa2OZ998t4WdHO5vPQbbdVg4rjAN2RHK3m7qs35JmMK8cROvhXVJuW3HjYLmsZqcrDd1tBrfbqf1V4hiIjGpu7kL3v0K+HC2HOxOvbAf6mEtnq3cgwHuxD+Jx08s3RYpTZbtbIbDCcVdh9MYnhvbVA7aRjtXNYR3WO5g2LtOWZZTcSqJpGMjihlEzWsdF2ZeydumV7xe17c7Dx2XqcsLHiz2NcDuHNBH3UxU8bP6uNjNLdxjW6dNAvVjz94/xg4HhjaaEMbHFG46vELcrB4D1PqtgmUlXMklSSBJJoQJJUhBKFSEDsiyqyEE2RZVZCBITQgSE7IQCaEIGmkhAPaHAtcAWuBa4HYgixBX524xwU4dXS0xB7Entad3Ps3fCR4ixaeuXyX6KXH+07h4VlC6Vjbz0odKy274/3jPHQXHi3xUlqs5Lxajnym+43Nv0+/ot/R4j2ZtJcxOANx8QHKRvW3MfquQDixxHmCDsQtnh85czs5L5Qf2b9i0+fM9Qudq67RbHdT1QfYVUjjkb+xmaMzi3cNuPiGul+u4urE0kYE0FTG3TIHyOkLx9SLN+y5/CKnsYgySVoeb9kx7XasuQAPw89+oVxYiySR8TnESaFzHOudNnMPMfzouU1mJdYnxsqmunLh7y4SB3wSMdmYfBY+IYgIoy42zWOVp5rS4iJaa8kLyInnvssDGHdQDsD+a0OJVbpZLm9srbeNwDf7q1prM3zx9Z62SZ4Dbue9waLDvOcTYNaOuwC974C4aGG0TYnAGoltLUuBv8AtLaMB6NGnibnmvMvZBgfvGIGqe28VE3ODbumd2kbfGwzO8CG9V7gvREPPeQkmkqwSE0kCQmhAklSEE2RZUhBNkWVIQVZFk0IFZFk0IFZFk0IEiyaECshNCBJoQgEIQg8c9pnA5ZOKujyCKXWSEXzxOG72NA7zPAbeR04yrpDBTNqGTRgOJYwZc8zrb76MGp2sfPdev8AtRoqn3N9TSPkAa3+lMje5ruzA/rmW1BHPq3f4V4HJWSDLBIbsjGVg5BpOa4+pJ+p6pGNa+lRO6SJ73ve7KWht3XtyNvUfZYlVVGR4kuQQBYg94Ec7rr+HuAavEMOkq4A0APkEDHOympylue3jcEAnS7XA23XJijlfK6CGGV0jA4yRtie6VuX48zQLi3O+yYmuhwDiS4MFWcwIIDywOv/AAvHPw6r64HwzXYnNenpnRxOdZ0z4zHTQgaaE/ER0bc+S5jP2eTLuB3iD8V9xfmFs8C4hnpZAaWokp9DmcHHI49XR2LSbabEqRSInYa7zmP0nw/gkNBTMpaZtmN1c46vlefikcep+wsBoAtiuK9nfGDsQjbHMc0zWXe7swwucD3iA0kFou3vaauAsu2VYJCaECshNCBIsmhArIsmhArIsmhArIsmhA0KkkCQmhAkWTQgVkWTQgVkWTQgVkJoQJCaECXlXE3skbPWxyUb2w0ssl6hl7Op23u7stLEHWw+Unpt6siyDGw+ijp4IqeFuSKGNsUbbk5WtFhrzPinPSMeyVhaAJmOjkLQGucC0g3I1vYrIshB437RPZpI8vq8OaZHRhnbQ2aJKgZbumbYAOkLsxIG99BfQ+RwQOke2NrXFznBoa1pLiSbBoA1Jvpbqv2AtFFwjRsxJ+Kti/pL2gcuza+xBmDbfGRoT58ySaNd7OeFP+m0n7UD3mYNdLseyaPhhB52uSTzJPKy62yaFArIsmhArIsmhArIsmhArIsmhArIsmhArIsmhBSSaECQmhAkJoQJCaECQmldAWRZIuCRlHVBVkL5mob1UGrZ1CD7oWMa6P8AEPVScSi/EPVBloWEcUi/GPVH/VYvxj1QZtkWWEMUi/GPVUMRi/EPVBl2RZYwro/xBWKpnUIPshfMTt6qhIOqCkJZgndAITQgSE0IEhNCBITQgSEkIGhShBSFKEFJJIQNIhCEHydFfmvi+lJ5rLQg1kmHE/MVjSYM4/MfVbxCDmZOHnH5z6rGfwu8/vHeq69Co4o8JP8A7R3ql/2g/wDtHeq7ZCDi28JP/tHeq+0fC7h+8d6rrkIOaj4fcPnPqsqPBiPmPqt2hQa2PDyPmKyGUpHNZSEHzbFbmvoAhCBoSQgaalCBoSQgpCkJoP/Z" alt=""/>
         <h5>Ahmed Kahil</h5>
         <h6>From Ful to Full Stack</h6> 
      </div>
      <div className="info_reveal">
        <h6>Contact<br/>Ahmed Kahil</h6>
        <p><a href="mailto:address@addresss.com">s.goodman@fbi.gov</a></p>
        <p>(123) 555-1234 x1100</p>
      </div>
    </div>
  </li>
  <li>
    <div className="team_member">
       <div className="info">
         <img src="https://www.clipartkey.com/mpngs/m/193-1936422_happy-employee-python-3-complete-masterclass-make-your.png" alt=""/>
         <h5>Rachel Aizenman</h5>
         <h6>Director of Chemical Weaponry</h6> 
      </div>
      <div className="info_reveal">
        <h6>Contact<br/>Rachel Aizenman</h6>
        <p>s.goodman@fbi.gov</p>
        <p>(123) 555-1234 x1100</p>
      </div>
    </div>
  </li>
  
    <li>
    <div className="team_member">
       <div className="info">
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU-5_JoETRAYQvtEwWPhkQWNSGLYRXRIQIek_C0xdpHFQGLs1H&s" alt=""/>
         <h5>Noam Lior</h5>
         <h6>Director of Chemical Weaponry</h6> 
      </div>
      <div className="info_reveal">
        <h6>Contact<br/>Noam Lior</h6>
        <p><a href="mailto:address@addresss.com">s.goodman@fbi.gov</a></p>
        <p>(123) 555-1234 x1100</p>
      </div>
    </div>
  </li>
  
</ul>
</div>
<div className='info about-info' id='general-about'>
<h5>About Us</h5>
<h6>A story of perseverance <br/>
The idea is simple. On the one hand there are people who want to give loans and get attractive interest rate on their money. On the other hand, there are people with a monthly salary of € 1,000 and up, who need a loan of up to 10,000 €.
Peer 2 Peer makes the connection between them, verifies their ability to repay, and anonymously connect them. The result: higher interest rates for loan providers, and lower interest rates to borrowers.

How can it be?
When there is no need to pay for luxurious offices, branches, high salaries, bonuses and cups of tea... We can offer a great service at a lower cost.
Peer 2 Peer does't have branches, thousands of employees or high overhead costs. Peer 2 Peer charges a transparent and clear fee and does not enjoy from interest rate margins.
We did not invent it. Peer to Peer Lending enjoyed great success in the world and represents a growing share of the loans market in the world. people to people ... and everybody is happy.
</h6>
            </div>
            </div>
            </div>
        )
    }
}
export default About;