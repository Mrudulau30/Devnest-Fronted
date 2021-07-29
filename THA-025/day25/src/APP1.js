import './App.css';
import './index.css';
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import "tailwindcss/tailwind.css"
function App1(props) {
    return (
        <div classname="card">
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="https://th.bing.com/th/id/R.27a5b69dc92dbc3244220ad8422c6317?rik=kAqqguG517pXpQ&riu=http%3a%2f%2fwww.dickersonsresort.com%2fwp-content%2fuploads%2f2013%2f12%2fsunset-6-38.jpg&ehk=gvKmlguRVTIDvcZgnHh%2bb7lsyiyWu8Dl%2b45b0NulD64%3d&risl=&pid=ImgRaw" alt="Sunset in the mountains" height="200px" width="450px" ></img>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>
</div>
    );
}

export default App1;
