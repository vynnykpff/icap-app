import{n as t,ah as e,ad as a,t as o}from"./index-295bad72.js";const i=t.div`
  display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	gap: 40px;
`,n=t(e)`
  background: var(--card-color);
	border: 2px solid var(--accent-color);
	width: 350px;
	height: 500px;
	border-radius: 20px;
  display: flex;
	flex-direction: column;
	align-items: center;
	text-decoration: none;
	color: var(--text-color);
  box-shadow: ${a};
	
	&.team-card {
		height: 420px;
	}

  @media (max-width: ${o}) {
	  text-align: center;
    width: 300px;
	  font-size: 16px;
  }
	
`,c=t.h4`
	font-size: 25px;
	margin: 0;
	padding: 15px 5px;
`,d=t.p`
  display: flex;
	align-items: center;
	height: 150px;
	text-align: center;
	padding: 15px 20px;
	margin: 0;
  border-bottom: 2px solid var(--accent-color);
	letter-spacing: 1.2px;
	font-weight: 600;
`,p=t.img`
	width: 100%;
	height: 240px;
	object-fit: cover;
  border-top: 2px solid var(--accent-color);
  border-bottom: 2px solid var(--accent-color);
`;export{i as C,n as a,c as b,p as c,d};
