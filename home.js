function toggleSidebar(){

    const sidebar = document.getElementById('sidebar');
    const closebtn = document.querySelector('.close-btn')
    const openbtn = document.querySelector('.open-btn');
    
    sidebar.classList.toggle("active");
    
    if(sidebar.classList.contains("active")){
      openbtn.style.display = "none";
      closebtn.style.display = "block";
    }
    else{
      openbtn.style.display = "block";
      closebtn.style.display = "none";
    }
    }
    
    document.querySelector('.open-btn').addEventListener('click', toggleSidebar);
    document.querySelector('.close-btn').addEventListener('click', toggleSidebar);