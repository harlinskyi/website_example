function cards_page(count) {
    document.querySelector('main').innerHTML = "";
    let cards = '';
    for (let i = 0; i < count; i++) {
        cards += `
        <div class="card" style="width: 15rem; margin: 10px auto;">
            <img class="card-img-top" src="images/fit_lim.jpg" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title t-capitalize">${rand_words()}</h5>
            <p class="card-text text-danger fw-bolder">${Math.floor(Math.random() * 300)}$</p>
        </div>
        <div class="card-footer">
            <button type="button" class="btn btn-success d-inline">Купити</button>
            <button type="button" class="btn btn-primary d-inline" style="white-space: nowrap;">
                <i class="fas fa-cart-plus me-1"></i>В кошик
            </button>
        </div>
        <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
        </div>
        </div>
        `;
   }
    document.querySelector('main').insertAdjacentHTML('beforeend', `
        <div class="row row-cols-md-3 mb-3 text-center" id="cards-block">${cards}</div> `);
}


function basket_page(count) {
    document.querySelector('main').innerHTML = "";
    let cards = '';
    let price = 0;
    for (let i = 0; i < count; i++) {
        n_price = Math.floor(Math.random() * 300);
        price += n_price;
        cards += `
        <div class="list-group-item" aria-current="true">
        <div class="d-flex w-100 justify-content-between align-items-center">
          <div class="d-flex align-items-center me-2">
            <input class="form-check-input me-2" type="checkbox">
            <img class="img-fluid img-thumbnail" src="images/fit_lim.jpg" alt="Card image cap"
              style="width: 100px;">
            <h6 class="ms-2 t-capitalize">${rand_words()}</h6>
          </div>
          <div class="divider-b flex-fill"></div>
          <div class="d-flex align-items-center ms-2">
            <h4>${n_price}$</h4>
            <button type="button" class="btn btn-danger ms-2"><i class="fas fa-trash" onclick="Remove_Field(this);"></i></button>
          </div>
        </div>
      </div>
        `;
   }
    document.querySelector('main').insertAdjacentHTML('beforeend', `
    <div class="container-lg">
    <div class="list-group">${cards}
    <hr />
    <div>
    <div class="d-flex w-100 justify-content-between align-items-center">
    <div class="d-flex align-items-center me-2">
    <h5 class="ms-2">Total</h5>
    </div>
    <div class="divider-b flex-fill"></div>
    <div class="d-flex align-items-center ms-2">
    <h4>${price}$</h4>
    <button type="button" class="btn btn-success ms-2"><i class="fas fa-shopping-cart me-2"></i>Оплатити</button>
    </div></div></div></div></div>`
    );
}


function profile_page(first_name, last_name, email, phone) {
    document.querySelector('main').innerHTML = "";
    document.querySelector('main').insertAdjacentHTML('beforeend', `
    <div class="container-lg">
        <div class="row" id="user-profile">
          <div class="col-lg-3 col-md-4 col-sm-4">
            <div class="main-box clearfix">
              <h2>${first_name}</h2>
              <img
                src="images/avatar1.png" alt=""
                class="profile-img img-fluid center-block">
              <div class="profile-since"> Member since: Jan 2012</div>
              <div class="profile-details">
                <ul class="fa-ul">
                  <li><i class="fa-li fa fa-truck"></i>Orders: <span>${Math.floor(Math.random() * 300)}</span></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-9 col-md-8 col-sm-8">
            <div class="main-box clearfix">
              <div class="profile-header">
                <h3><span>User info</span></h3> <a href="#" class="btn btn-edit edit-profile"> <i
                    class="fa fa-pencil-square fa-lg"></i> Edit profile </a>
              </div>
              <div class="row profile-user-info">
                <div class="col-sm-12">
                  <div class="profile-user-details clearfix">
                    <div class="profile-user-details-label">First Name</div>
                    <div class="profile-user-details-value">${first_name}</div>
                  </div>
                  <div class="profile-user-details clearfix">
                    <div class="profile-user-details-label">Last Name</div>
                    <div class="profile-user-details-value">${last_name}</div>
                  </div>
                  <div class="profile-user-details clearfix">
                    <div class="profile-user-details-label">Email</div>
                    <div class="profile-user-details-value">${email}</div>
                  </div>
                  <div class="profile-user-details clearfix">
                    <div class="profile-user-details-label">Phone number</div>
                    <div class="profile-user-details-value">${phone}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`
    );
}

function rand_words() {
    let chrs = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя \'',
        word = '';
    for (let i = 0; i < Math.random() * (15 - 6) + 6; i++) {
        word += chrs[Math.round(Math.random() * (chrs.length - 1))];
   }
    return word;
}

function Remove_Field(element) {
    $(element).parents(".list-group-item").remove();
}