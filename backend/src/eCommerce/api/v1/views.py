from django.http import HttpResponse, JsonResponse

def home(request):
    return HttpResponse("Welcome to the eCommerce API!")

def health_check(request):
    return JsonResponse({"status": "ok"})