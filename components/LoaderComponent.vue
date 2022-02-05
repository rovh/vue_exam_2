<template>
  <div class="loader loader4">
    <div>
      <div>
        <div>
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoaderComponent',
}
</script>

<style>
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes rotate2 {
  0% {
    transform: rotate(0deg);
    border-top-color: rgba(51, 42, 42, 0.5);
  }
  50% {
    transform: rotate(180deg);
    border-top-color: rgba(226, 80, 80, 0.5);
  }
  100% {
    transform: rotate(360deg);
    border-top-color: rgba(37, 26, 26, 0.5);
  }
}

.loader {
  position: relative;
  margin: 75px auto;
  width: 150px;
  height: 150px;
  display: block;
  overflow: hidden;
}
.loader div {
  height: 100%;
}

/* loader 4 */
.loader4,
.loader4 div {
  border-radius: 50%;
  padding: 8px;
  border: 2px solid transparent;
  animation: rotate linear 3.5s infinite;
  padding: 4px;
  animation: rotate2 4s infinite linear;
}

div:hover {
  animation-play-state: paused;
}

.loader,
.loader * {
  will-change: transform;
}
</style>
