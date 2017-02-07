docker pull rselvanathan/my_page:latest
isImageRunning=$(docker inspect -f {{.State.Running}} my_page 2> /dev/null)
if [ "$isImageRunning" = "true" ]; then
	echo "Removing my_page container"
	docker stop my_page
	docker rm my_page
fi
value=$(docker images -q --filter "dangling=true")
if [ "$value" = "" ]; then
	echo "No Dangling Images"
else
	echo "Removing Dangling Images"
 	docker images -q --filter "dangling=true" | xargs docker rmi
fi
docker run -d \
-e VIRTUAL_HOST= \
-e LETSENCRYPT_HOST= \
-e LETSENCRYPT_EMAIL= \
--name my_page -it rselvanathan/my_page:latest