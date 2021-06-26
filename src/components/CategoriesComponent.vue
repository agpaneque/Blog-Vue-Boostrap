<template>
    <!-- Categories widget-->
        <div class="card mb-4">
          <div class="card-header">Categories</div>
          <div class="card-body">
            <div class="row">
              <div class="col-sm-6">
                <ul class="list-unstyled mb-0">
                  <li><router-link to="/SearchByCategorie/Web Design" >Web Design</router-link></li>
                  <li><router-link :to="{ name: 'sbc', params: {idsearch: 'html'} }" >HTML</router-link></li>
                  <li><router-link to="/SearchByCategorie/Freebies" >Freebies</router-link></li>
                </ul>
              </div>
              <div class="col-sm-6">
                <ul class="list-unstyled mb-0">
                  <li><router-link to="/SearchByCategorie/JavaScript" >JavaScript</router-link></li>
                  <li><router-link to="/SearchByCategorie/CSS" >CSS</router-link></li>
                  <li><router-link to="/SearchByCategorie/Tutorials" >Tutorials</router-link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
</template>

<script>
export default {
    name:"CategoriesComponent"

}
</script>

<style>

</style>