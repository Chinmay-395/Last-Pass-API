from rest_framework import permissions


class UpdateLastPass(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        print("The user")
        print(obj.ogUser)
        print("The logged in user")
        print(request.user)
        if request.method in permissions.SAFE_METHODS:

            return True
        return obj.ogUser.id == request.user.id
