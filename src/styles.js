import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .loading{
    display: flex;
    align-items: center;
    justify-content: center;

    padding-left:50px;
    z-index:5;
  }

  figure {
	position: relative;
  display: flex;
  flex-direction: column;
	align-items: center;
	justify-content: center;
  width: 500px;
  margin-top: 30px;
	padding: 20px 20px;
	background-image: url('https://s3.amazonaws.com/tinycards/image/65ea02465b3b6b51d09d5751f707b683');
	background-position: center center;
	background-repeat: no-repeat;
	background-size: 100%;
	border-radius: 10px;
	box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
	transition: all 0.5s cubic-bezier(.25,.8,.25,1);
  overflow: hidden;
  border: 1px solid #363e4f;
  z-index: 100;

	&:before,
	&:after {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	&:before {
		content: '';
		background-color: rgba(black,0.1);
		z-index: 0;
	}
	&:after {
		content: '';
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.5s cubic-bezier(.25,.8,.25,1);;
		overflow: hidden;
	}

  

  h1 {
    color: white;
    display: flex;
    justify-content: center;
    margin: 0 0 20px 5px;
    font-size: 48px;
    line-height: 1.35;
    text-shadow: 2px 2px #000000;
  }
  
	div {
		color: white;
		transition: all 0.5s cubic-bezier(.25,.8,.25,1);
		z-index: 1;
	
		p {
		display: flex;
		align-items: center;
		justify-content: center;
    flex-direction: row;
    width: 400px;
		padding: 10px;
		background-color: #363e4f;
    opacity: .8;
		text-shadow: 1px 1px rgba(black, 0.7);
		transition: all 0.5s cubic-bezier(.25,.8,.25,1);
      span {
        color: white;
        font-weight: bold;
        line-height: 1;
        font-size: 20px;
        margin: 0 5px;
      }
		}
	}
}
`

//stars
export const Stars = styled.div`
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  width:100%;
  height:100%;
  display:block;

  background:#000 url('http://www.script-tutorials.com/demos/360/images/stars.png') repeat top center;
  z-index:0;
`

export const Blink = styled.div`
  @keyframes move-blink {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
  }
  @-webkit-keyframes move-blink {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
  }
  @-moz-keyframes move-blink {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
  }
  @-ms-keyframes move-blink {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
  }

  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  width:100%;
  height:100%;
  display:block;

  background:transparent url(http://www.script-tutorials.com/demos/360/images/twinkling.png) repeat top center;
  z-index:1;

  -moz-animation:move-blink 200s linear infinite;
  -ms-animation:move-blink 200s linear infinite;
  -o-animation:move-blink 200s linear infinite;
  -webkit-animation:move-blink 200s linear infinite;
  animation:move-blink 200s linear infinite;
`

// button
export const Button = styled.button`
  border: none;
  box-shadow: 0 0 0 1px #363e4f inset;
  background: none;
  margin-top: 20px;
  padding: 2rem 6rem;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  color: white;
  z-index: 2;
  }
`
