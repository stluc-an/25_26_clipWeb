const repoName = "24_25_AN1_clipWeb";
const ownerName = "stluc-an";
let listPath = "clips";

const requestClips = async () => {
	const data = await fetch(`https://codeberg.org/api/v1/repos/${ownerName}/${repoName}/contents/${listPath}`)
	const txt = await data.text();
	return JSON.parse(txt) || [];
}

const b64DecodeUnicode = (str) => {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}

const requestTrackInfo = async (path) => {
	// console.log(path);
	const data = await fetch(`https://codeberg.org/api/v1/repos/${ownerName}/${repoName}/contents/${path}/README.txt?ref=pages`);
	const txt = await data.text();
	const {content} = JSON.parse(txt);
	return b64DecodeUnicode(content).split("\n");
}

const openLink = (event) => {
	if(event.preventDefault){
		event.preventDefault();	
	}
	if(event.target.parentElement.classList.contains("current")){
		event.target.parentElement.classList.remove("current");
		//change url without reload
		window.history.replaceState( {} , "", "");
	}else{
		document.querySelector("iframe").src = event.target.href;
		document.querySelector(".current")?.classList.remove("current");
		event.target.parentElement.classList.add("current");
		//change url without reload
		window.history.replaceState( {} , "", `?clip=${event.target.href.split("/").pop()}`);
		if(!event.preventDefault){
			document.querySelector("ul#studentList").classList.remove("open");;	
		}
	}
	return false;
}

const createLink = async (elem) => {
	const [artistname, trackname, link] = await requestTrackInfo(elem.path);
	const li = document.createElement("li");
	const clip = document.createElement("a");
	const track = document.createElement("a");
	const trackHolder = document.createElement("span");

	clip.innerText = elem.name.split("_").reverse().join(" ");
	clip.target = "_blank";
	clip.href = elem.path;
	clip.addEventListener("click", openLink, false);
	li.appendChild(clip);
	
	track.innerText = artistname + " - " + trackname;
	track.target = "_blank";
	track.href = link;
	trackHolder.appendChild(track);
	li.appendChild(trackHolder);
	return li;
}

const main = async () => {
	const urlParams = new URLSearchParams(window.location.search);
	const myList = urlParams.get('list');
	if(myList){
		listPath = myList
	}

	const clips = (await requestClips()).filter(({path})=>path != `${listPath}/README.md`);
	const links = await Promise.all(clips.map(createLink));
	const list = document.querySelector("ul#studentList");
	links.map(link => list.appendChild(link))
	list.addEventListener("mouseenter", ({target}) => target.classList.add("open"), false);
	list.addEventListener("mouseleave", ({target}) => {
		if(document.querySelector(".current")){
			target.classList.remove("open");	
		}
	}, false);
}

main()
.then(()=>{
	const urlParams = new URLSearchParams(window.location.search);
	const myParam = urlParams.get('clip');
	if(myParam){
		openLink({
			target : document.querySelector(`[href$='${myParam}']`)
		});
	}
	
	
})
.catch(console.log);
