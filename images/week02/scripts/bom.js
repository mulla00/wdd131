button.addEventListener('click', function () {
     if (input.value.trim() !== '') {
          const input = document.querySelector("#favchap");
          const button = document.querySelector("button");
          const list = document.querySelector("list");
          const li = document.createElement("li");
          const deleteButton = document.createElement("button");
          li.textContent = input.Value;
          deleteButton.textContent = "❌";
          li.append(deleteButton);
          list.append(li);
     }
});

deleteButton.addEventListener('click', function () {
     list.removeChild(li);
     input.focus();
     input.value = '';
});