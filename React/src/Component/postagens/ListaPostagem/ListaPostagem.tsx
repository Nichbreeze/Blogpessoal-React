import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.PostagemControllerApi;

import java.io.File;
import java.util.*;

public class PostagemControllerApiExample {

    public static void main(String[] args) {
        
        PostagemControllerApi apiInstance = new PostagemControllerApi();
        try {
            apiInstance.getAll1();
        } catch (ApiException e) {
            System.err.println("Exception when calling PostagemControllerApi#getAll1");
            e.printStackTrace();
        }
    }